import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Reginster from "../pages/Home/Reginster/Reginster";
import Error from "../pages/Sheard/Error/Error";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Components/PrivateRoute";
import MySelectedClass from "../Components/DashboardCompo/MySelectedClass/MySelectedClass";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Reginster></Reginster>,
			},
		],
	},
	{
		errorElement: <Error></Error>,
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		children: [
			{
				path: "mySelectedClass",
				element: <MySelectedClass></MySelectedClass>,
			},
		],
	},
]);
