import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  // State to manage the visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event and update the visibility state
  const handleScroll = () => {
    // If the user has scrolled more than 100 pixels, make the button visible
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      // If not, hide the button
      setIsVisible(false);
    }
  };

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    // Button element to scroll to the top when clicked
    <button
      className={`transition-all text-5xl fixed bottom-4 right-4 p-2 bg-secondary text-white rounded-full ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      {/* Up arrow icon from React Icons library */}
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;