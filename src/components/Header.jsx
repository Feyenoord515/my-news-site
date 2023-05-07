import React from 'react';
import WeatherInfo from './WeatherInfo';
const Header = () => {
  return (
    <header className="bg-yellow-400 w-full">
         <div className="ml-auto bg-black text-white">
          <WeatherInfo />
        </div>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M27 6C15.938 6 6 15.938 6 27s9.938 21 21 21 21-9.938 21-21S38.062 6 27 6zm0 38c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15z"/><path d="M21.75 23.25h-4.5v-1.5h4.5v-3h3v3h4.5v1.5h-4.5v3h-3v-3zM32.25 26.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25zM27 33.75c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25zM21.75 26.25h-3v-3h3v3zm12 0h-3v-3h3v3zm-6 10.5c-5.014 0-9-4.036-9-9s3.986-9 9-9c5.014 0 9 4.036 9 9s-3.986 9-9 9z"/></svg>
          <span className="font-semibold text-xl tracking-tight">My News Site</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                        >
                          Home
                        </a>
                        <a
                          href="#"
                          className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                        >
                          Categories
                        </a>
                        <a
                          href="#"
                          className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white"
                        >
                          About
                        </a>
                      </div>
        </div>
                    </nav>
                  </header>
                );
              };
              
              export default Header;
              
