import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { type ButtonHTMLAttributes } from "react";

type customButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

function CustomButton({ children }: customButtonProps) {
    return (
        <button className="bg-custom-orange rounded-full pl-6 py-2 pr-2 flex h-[3.65rem]">
            <div className="mr-4 font-medium my-auto text-white">{children}</div>
            <div className="aspect-square rounded-full bg-white text-custom-blue flex">
                <FontAwesomeIcon icon={faArrowRight} size="xl" className="m-auto" />
            </div>
        </button>
    );
}

export default CustomButton;
