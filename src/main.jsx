import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Account from "./pages/Account.jsx";
import Settings from "./pages/Settings.jsx";
import Login from "./pages/Login.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "bookings",
				element: <Bookings />,
			},
			{
				path: "cabins",
				element: <Cabins />,
			},
			{
				path: "users",
				element: <Users />,
			},
			{
				path: "settings",
				element: <Settings />,
			},
			{
				path: "account",
				element: <Account />,
			},
		],
	},

	{
		path: "login",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyles />
		<RouterProvider router={router} />
	</React.StrictMode>
);
