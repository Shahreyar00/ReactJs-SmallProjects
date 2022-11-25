import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";


const App = () => {
    const Layout = () => {
        return(
            <div>
                <Navbar />
                <Outlet />
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Example1 />,
                },
                {
                    path:"/example2",
                    element: <Example2 />,
                }
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App