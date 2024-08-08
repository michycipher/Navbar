"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 shadow-md">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-800 font-bold ">LOGO</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className=""
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/x-close.png" width={25} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="text-black"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-16 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-5 md:pb-2 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  border-black">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-6 px-6 text-center  border-b-2 md:border-b-0  border-black">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-6 px-6 text-center  border-b-2 md:border-b-0  border-black">
                  <Link href="#privacy" onClick={() => setNavbar(!navbar)}>
                    Privacy Policy
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-6 px-6 text-center  border-b-2 md:border-b-0  border-black">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
