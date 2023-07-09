import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const provider = new GoogleAuthProvider();

	const handleGoogleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};
	const registerUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (LoggedInUser) => {
			setUser(LoggedInUser);
			if (LoggedInUser?.email) {
				axios
					.post(`https://music-book-server.vercel.app/jwt`, {
						email: LoggedInUser?.email,
					})
					.then((data) =>
						localStorage.setItem("access-token", data.data.token)
					);
				setLoading(false);
			} else {
				localStorage.removeItem("access-token");
			}
		});
		return () => {
			unSubscribe();
		};
	}, []);
	const authInfo = {
		loading,
		registerUser,
		user,
		logOut,
		signIn,
		handleGoogleSignIn,
		updateUserProfile,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
