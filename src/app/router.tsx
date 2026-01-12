import { createBrowserRouter } from "react-router";
import Inicio from "./routes/Inicio";
import Root from "./routes/Root";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [{ index: true, Component: Inicio }],
    },
]);

export default router;
