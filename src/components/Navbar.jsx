import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { logo } from "../components/Data";
import { cart } from "../components/Data";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            scrollToTop();
        };
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <nav className="mb-24">
                <header className="bg-backgroundColor fixed top-0 w-full h-24 z-50 border-b-2 border-black">
                    <div className="container flex justify-between items-center mx-auto p-3 relative">

                        {/* Logo and Toggle Button */}
                        <div className="flex items-center lg:hidden">
                            <Link to="/" className="hover:text-primary">
                                <img src={logo} className="h-16" alt="Logo" />
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            className="lg:hidden text-5xl focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            &#8801;
                        </button>

                        {/* Mobile Menu */}
                        <div
                            className={`${isMobileMenuOpen ? "block" : "hidden"
                                } lg:hidden w-full absolute top-full left-0 mt-2 transition-all duration-300 ease-in-out bg-white rounded shadow-md border-b-2 border-black`}
                        >
                            <ul className="flex flex-col items-center space-y-4 p-4">
                                <li>
                                    <Link
                                        to="/"
                                        className="hover:text-primary"
                                        onClick={toggleMobileMenu}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/order"
                                        className="hover:text-primary"
                                        onClick={toggleMobileMenu}
                                    >
                                        Order
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/locations"
                                        className="hover:text-primary"
                                        onClick={toggleMobileMenu}
                                    >
                                        Locations
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/catering"
                                        className="hover:text-primary"
                                        onClick={toggleMobileMenu}
                                    >
                                        Catering
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex container justify-center items-center mx-auto space-x-8">
                            <Link to="/"><img src={logo} className="h-16" alt="Logo" onClick={scrollToTop} /></Link>
                            <Link to="/" className="ml-0 hover:text-primary" onClick={scrollToTop}>Home</Link>
                            <Link to="/order" className="hover:text-primary" onClick={scrollToTop}>Order</Link>
                            <Link to="/locations" className="hover:text-primary" onClick={scrollToTop}>Locations</Link>
                            <Link to="/catering" className="hover:text-primary" onClick={scrollToTop}>Catering</Link>
                            <Link to="/order"><img src={cart} className="h-8" alt="Logo" onClick={scrollToTop} /></Link>
                        </div>
                    </div>
                </header>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;