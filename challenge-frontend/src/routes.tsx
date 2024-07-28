import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Listing from "./pages/Listing";
import Form from "./pages/Form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Listing />,
    },
    {
        path: "/new",
        element: <Form />,
    },
    {
        path: "/edit/:id",
        element: <Form />,
    },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;