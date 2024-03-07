import React from "react";

// Individual Store component to display store information
const Store = (props) => {
    return (
        <div className="pb-12 text-center lg:text-left">
            {/* Store name */}
            <h1 className="text-secondary text-2xl">{props.name}</h1>

            {/* Store address with location icon */}
            <div className="lg:flex pt-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:flex w-6 h-6" viewBox="0 0 13 18" fill="none">
                    <path d="M5.83199 16.9836C0.913047 9.85261 0 9.12075 0 6.5C0 2.91014 2.91014 0 6.5 0C10.0899 0 13 2.91014 13 6.5C13 9.12075 12.087 9.85261 7.16801 16.9836C6.84521 17.4499 6.15476 17.4499 5.83199 16.9836ZM6.5 9.20833C7.99578 9.20833 9.20833 7.99578 9.20833 6.5C9.20833 5.00422 7.99578 3.79167 6.5 3.79167C5.00422 3.79167 3.79167 5.00422 3.79167 6.5C3.79167 7.99578 5.00422 9.20833 6.5 9.20833Z" fill="black" />
                </svg>
                <h1 className="lg:pl-3 text-lg">{props.address}</h1>
            </div>

            {/* Store phone number with phone icon */}
            <div className="lg:flex pt-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden lg:flex w-6 h-6">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <h1 className="lg:pl-3 text-lg">{props.phone}</h1>
            </div>
        </div>
    );
};

// Exporting the Store component as the default export
export default Store;