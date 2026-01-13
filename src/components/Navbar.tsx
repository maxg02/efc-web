import React, { useState } from "react";
import logo from "@/assets/logo_isotipo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [openNav, setOpenNav] = useState<boolean>(false);

    return (
        <header className="relative">
            <div className="flex justify-between flex-wrap rounded-b-xl px-6 pt-6 mb-6 relative z-50 bg-white">
                <img className="h-20" src={logo} alt="logo" />
                <button onClick={() => setOpenNav(!openNav)} className="ml-auto text-custom-orange">
                    {!openNav ? (
                        <FontAwesomeIcon icon={faBars} size={"2x"} />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} size={"2x"} />
                    )}
                </button>
                <nav
                    className={`flex-1 flex basis-full overflow-hidden justify-center transition-all duration-1000 ${
                        openNav ? "max-h-44 py-4" : "max-h-0 pt-0"
                    }`}
                >
                    <ul className="flex flex-col justify-evenly gap-y-4 items-center">
                        <li>
                            <a>Inicio</a>
                        </li>
                        <li>
                            <a>Sobre Nosotros</a>
                        </li>
                        <li>
                            <a>Noticias</a>
                        </li>
                        <li>
                            <a>Contáctanos</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                className={`absolute bg-black h-dvh w-dvw top-0 left-0 z-40 transition-all duration-1000 ${
                    openNav ? "opacity-40" : "opacity-0"
                }`}
            ></div>
        </header>
    );
}

export default Navbar;
