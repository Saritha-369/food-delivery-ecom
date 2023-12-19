import React, { useState } from 'react';
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

// React Icons
import { MdOutlineDeliveryDining, MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [navOpen, setNavbOpen] = useState(false);

  const closeNav = () => {
    if (!navOpen) {
      setNavbOpen(navOpen);
      navOpen = true;
    } else {
      setNavbOpen(!navOpen);
      navOpen = false;
    }
  }
  return (
    <nav className="pt-0 flex justify-between items-center lg:pt-2">
        <div className="z-50">
            <h2 title="FlavorDash - Your Favourite Food Delivery Partner">
              <Link href="/">
                <a className="flex flex-col justify-center items-center gap-0">
                  <svg style={{ stroke: '#ef4645' }} xmlns="http://www.w3.org/2000/svg" className=" text-red-500 icon icon-tabler icon-tabler-soup" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
  <path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
  <path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
  <path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
</svg>
                  <span className={`text-sm text-black font-semibold ${styles.brand} ${navOpen ? `${styles.open}` : ""}`}>FlavorDash</span>
                </a>
              </Link>
            </h2>
        </div>

        <div>
          <ul className={`menu hidden absolute left-0 top-0 px-3 pb-6 pt-20 bg-black w-full sm:w-unst sm:bg-transparent sm:p-0 sm:static sm:flex sm:justify-center sm:items-center sm:gap-4 ${styles.menu} ${navOpen ? `${styles.open}` : ""}`}>
             <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-red-500 w-max sm:mb-0 sm:text-black" title="Home" onClick={() => closeNav()}>
              <Link href="/">Home</Link>
            </li>
           
            <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-red-500 w-max sm:mb-0 sm:text-black" title="Menu" onClick={() => closeNav()}>
              <Link href="/menu">Menu</Link>
            </li>
           
          </ul>
        </div>

        <div>
          <Link href="/cart">
            <a title="Cart">
              <MdOutlineShoppingCart className={`font-semibold text-2xl text-black ${styles.cart} ${navOpen ? `${styles.open}` : ""}`} />
            </a>
          </Link>
        </div>

        <div 
            className={`z-50 flex flex-col justify-center items-center bg-gray-100 h-9 w-10 rounded-md sm:hidden ${styles.hamburger} ${navOpen ? `${styles.open}` :  ""}`}
            onClick={() => setNavbOpen(!navOpen)}>
          <span className="h-0.5 w-7 bg-black mb-1.5 ease-in-out duration-150"></span>
          <span className="h-0.5 w-7 bg-black mb-1.5 ease-in-out duration-150"></span>
          <span className="h-0.5 w-7 bg-black ease-in-out duration-150"></span>
        </div>
    </nav>
  )
}

export default Navbar;
