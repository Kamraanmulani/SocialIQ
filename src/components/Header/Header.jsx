

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Link is used to navigate to a different page and it is used against a tag as a tag refresh the page 
// which is not the functionality we want in a single page application
// NavLink is used to add a class to the active link

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-900 border-gray-800 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-2xl text-white font-bold">SocialIQ</h1>
                            
                          
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-300 hover:bg-gray-700 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-600" : "text-gray-300"} border-gray-800 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-600" : "text-gray-300"} border-gray-800 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-600" : "text-gray-300"} border-gray-800 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/chat'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-600" : "text-gray-300"} border-gray-800 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Chat
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}