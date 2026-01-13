import { createBrowserRouter } from "react-router";
import Home from "./routes/Home/Home";
import Root from "./routes/Root";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [{ index: true, Component: Home }],
    },
]);

export default router;
