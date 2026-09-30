import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [{ index: true, element: <Home /> }],
        },
    ],
    { basename }
);

export default router;
