import React from "react";
import {logo} from "../components/Data";

const Navbar = () => {
    return (
        <nav >
            <header class="bg-backgroundColor fixed top-0 w-full h-24 z-50 border-b-2 border-black">
                <div class="container flex justify-center items-center mx-auto p-3 space-x-8">
                    <a href="#menu" class="ml-0 hover:text-primary">Menu</a>
                    <a href="#" className="hover:text-primary">Order</a>
                    <a href="#"><img src={logo} class="h-16" alt="Logo"/></a>
                    <a href="#" className="hover:text-primary">Locations</a>
                    <a href="#" className="hover:text-primary">Catering</a>
                </div>
            </header>
        </nav>
    );
};
``
export default Navbar;