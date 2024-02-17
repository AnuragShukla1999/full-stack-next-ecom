"use client";

import { GlobalContext } from "@/context";
import { useContext } from "react";


// function NavItems({ isModalView = false, isAdminView, routes }) {
//     return (
//         <div>
//             hi
//         </div>
//     )
// };


export default function Navbar() {
    // const { showNavModal, setShowNavModal } = useContext(GlobalContext);

    // const {
    //     user,
    //     isAuthUser,
    //     setIsAuthUser,
    //     setUser
    // } = useContext(GlobalContext);


    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div
                        onClick={() => router.push("/")}
                        className="flex items-center cursor-pointer"
                    >
                        <span className="slef-center text-2xl font-semibold whitespace-nowrap text-black">
                            Ecommercery
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}