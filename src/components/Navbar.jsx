import React from "react";
const Navbar = () => {
    return (
        <nav >
            <header class="bg-white fixed top-0 w-full h-20 z-50">
                <div class="container flex justify-center items-center mx-auto p-3 space-x-8">
                    <a href="#"><img src="src/assets/Logo-Brand.png" class="h-16" /></a>
                    <a href="#" class="ml-0">Menu</a>
                    <a href="#">Order</a>
                    <a href="#">Locations</a>
                    <a href="#">Reservations</a>
                    <a href="#">Catering</a>
                    <a href="#">Contact</a>
                </div>
            </header>
        </nav>
    );
};
``
export default Navbar;