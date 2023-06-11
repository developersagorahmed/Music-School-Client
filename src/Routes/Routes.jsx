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
				path: "mySelectedClass",
				element: <MySelectedClass></MySelectedClass>,
			},
			{
				path: "myEnrolledClass",
				element: <MyEnrolledClass></MyEnrolledClass>,
			},
			{
				path: "payment",
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
						`http://localhost:5000/dashboard/myClasses/editClass/${params.id}`
					),
			},
			{
				path: "manageClasses",
				element: <ManageClasses></ManageClasses>,
			},
		],
	},
]);
