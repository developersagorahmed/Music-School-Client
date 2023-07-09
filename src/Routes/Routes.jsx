import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Reginster from "../pages/Home/Reginster/Reginster";
import Error from "../pages/Sheard/Error/Error";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Components/PrivateRoute";
import MySelectedClass from "../Components/DashboardCompo/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Components/DashboardCompo/MyEnrolledClass/MyEnrolledClass";
import Payment from "../Components/DashboardCompo/Payment/Payment";
import AddaClass from "../Components/DashboardCompo/AddaClass/AddaClass";
import MyClasses from "../Components/DashboardCompo/AddaClass/MyClasses/MyClasses";
import EditClass from "../Components/DashboardCompo/EditClass/EditClass";
import ManageClasses from "../Components/DashboardCompo/Admin/ManageClasses/ManageClasses";
import Instractor from "../Components/Instractor/Instractor";
import Classes from "../Components/Classes/Classes";
import MainDash from "../Layout/MainDash";
import Feedack from "../Components/DashboardCompo/Admin/ManageClasses/Feedack";
import ManageUser from "../Components/DashboardCompo/Admin/ManageUser/ManageUser";

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
				path: "/register",
				element: <Reginster></Reginster>,
			},
			{
				path: "/Instructors",
				element: <Instractor></Instractor>,
			},
			{
				path: "/classes",
				element: <Classes></Classes>,
			},
		],
	},
	{
		path: "/dashboard",
		errorElement: <Error></Error>,
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		children: [
			{
				path: "/dashboard",
				element: <MainDash></MainDash>,
			},
			{
				path: "mySelectedClass",
				element: <MySelectedClass></MySelectedClass>,
			},
			{
				path: "myEnrolledClass/:email",
				element: <MyEnrolledClass></MyEnrolledClass>,
			},
			{
				path: "payment/:id",
				element: <Payment></Payment>,
			},
			{
				path: "addaclass",
				element: <AddaClass></AddaClass>,
			},
			{
				path: "myClasses",
				element: <MyClasses></MyClasses>,
			},
			{
				path: "myClasses/editClass/:id",
				element: <EditClass></EditClass>,
				loader: ({ params }) =>
					fetch(
						`https://music-book-server.vercel.app/dashboard/myClasses/editClass/${params.id}`
					),
			},
			{
				path: "manageClasses",
				element: <ManageClasses></ManageClasses>,
			},
			{
				path: "/dashboard/feedback/:id",
				element: <Feedack></Feedack>,
			},
			{
				path: "manageUser",
				element: <ManageUser></ManageUser>,
			},
		],
	},
]);
