"use client"; // Marks this file as a client-side component for Next.js (indicating React rendering)

import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { useAppDispatch, useAppSelector } from "@/app/redux"; // Importing the useAppDispatch hook from Redux toolkit
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react"; // Importing icons from lucide-react package
import Link from "next/link"; // Importing Link component from Next.js for navigation
import React from "react"; // Importing React to define the component

const Navbar = () => {
  // Defining the Navbar functional component
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

const toggleDarkMode = () => {
  dispatch(setIsDarkMode(!isDarkMode));
}

  return (
    // Returning JSX to render the navbar UI
    <div className="flex justify-between items-center w-full mb-7">
      {/* Container for the entire navbar with flex layout */}
      {/* Left side */}
      <div className="flex justify-between items-center gap-5">
        {" "}
        {/* Left section of the navbar with flex layout */}
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" // Styling button with padding, background color, border-radius and hover effect
          onClick={toggleSidebar} // Placeholder for click handler (currently empty)
        >
          <Menu className="w-4 h-4" />{" "}
          {/* Menu icon inside the button, with width and height set */}
        </button>
        <div className="relative">
          {" "}
          {/* Wrapping div for search input, set to relative position for icon positioning */}
          <input
            type="search" // Input field type set to "search"
            placeholder="Start typing to search groups and products" // Placeholder text in the search box
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500" // Styling for search input (padding, width, border, rounded corners, focus effect)
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {" "}
            {/* Bell icon positioned inside the search field */}
            <Bell className="text-gray-500" size={20} />{" "}
            {/* Bell icon with gray color and size 20 */}
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex justify-between items-center gap-5">
        {" "}
        {/* Right section of the navbar with flex layout */}
        <div className="hidden md:flex justify-between items-center gap-5">
          {" "}
          {/* This div is hidden on small screens, only shown on medium and larger screens */}
          <div>
            {" "}
            {/* Container for Sun button */}
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-yellow-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}{" "}
              {/* Conditional rendering of Sun or Moon icon based on dark mode */}
            </button>
          </div>
          <div className="relative">
            {" "}
            {/* Container for Bell icon with notification badge */}
            <Bell className="cursor-pointer text-gray-500" size={24} />{" "}
            {/* Bell icon with pointer cursor and gray color */}
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3 {/* Notification badge showing the number of notifications */}
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />{" "}
          {/* Vertical line separator between sections */}
          <div className="flex items-center gap-3 cursor-pointer">
            {" "}
            {/* Flex container for profile section */}
            <div className="w-9 h-9">image</div>{" "}
            {/* Placeholder for profile image (styled width and height) */}
            <span className="font-semibold">Kuper Bank</span>{" "}
            {/* Displaying the username or profile name */}
          </div>
        </div>
        <Link href="/settings">
          {" "}
          {/* Link component that navigates to the '/settings' page when clicked */}
          <Settings className="cursor-pointer text-gray-500" size={24} />{" "}
          {/* Settings icon with cursor pointer and gray color */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar; // Exporting the Navbar component to be used in other parts of the application
