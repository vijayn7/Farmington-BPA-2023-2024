import React from "react";
import { logo } from "../components/Data";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav >
                <header class="bg-backgroundColor fixed top-0 w-full h-24 z-50 border-b-2 border-black">
                    <div class="container flex justify-center items-center mx-auto p-3 space-x-8">
                        <Link to="/" class="ml-0 hover:text-primary">Menu</Link>
                        <Link to="/" className="hover:text-primary">Order</Link>
                        <Link to="/"><img src={logo} class="h-16" alt="Logo" /></Link>
                        <Link to="/locations" className="hover:text-primary">Locations</Link>
                        <Link to="/" className="hover:text-primary">Catering</Link>
                    </div>
                </header>
            </nav>

            <Outlet />
        </>
    );
};
``
export default Navbar;