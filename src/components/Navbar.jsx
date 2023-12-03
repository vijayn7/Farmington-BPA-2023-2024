import React from "react";
const Navbar = () => {
    return (
        <nav >
            <header class="bg-backgroundColor fixed top-0 w-full h-24 z-50 border-b-2 border-black">
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