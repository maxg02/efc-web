import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

function Root() {
    return (
        <div className="w-dvw min-h-dvh">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Root;
