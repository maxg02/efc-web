import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

function Root() {
    return (
        <div className="w-dvw min-h-dvh">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;
