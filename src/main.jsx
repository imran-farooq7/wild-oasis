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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});
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
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<GlobalStyles />
			<RouterProvider router={router} />
		</QueryClientProvider>
		<Toaster />
	</React.StrictMode>
);
