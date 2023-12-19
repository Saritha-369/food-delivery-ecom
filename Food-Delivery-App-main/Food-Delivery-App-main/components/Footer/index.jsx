import React from "react";
import Link from "next/link";

// React Icons
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsTelephonePlus, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="mt-20 mb-12 grid place-items-center grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:mt-32">
                <div className="text-center md:text-left">
                    <h2 title="FlavorDash - Your Favourite Food Delivery Partner">
                        <Link href="/">
                            <a className="flex flex-col justify-center items-center gap-0 w-max m-auto md:m-0">
                            <svg style={{ stroke: '#ef4645' }} xmlns="http://www.w3.org/2000/svg" className=" text-red-500 icon icon-tabler icon-tabler-soup" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
  <path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
  <path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
  <path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
</svg>
                                <span className="text-xl text-black font-semibold">FlavorDash</span>
                            </a>
                        </Link>
                    </h2>
                    <p className="my-6 text-gray-600 text-sm text-justify sm:text-center md:text-left leading-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        This last been the industrys standard dummy text ever since the 1500s,
                    </p>
                    <h5 className="font-semibold text-sm text-gray-600">
                        &copy; 2023 FlavorDash. All Rights Reserved.
                    </h5>
                </div>

                <div className="text-center mb-4 lg:text-left lg:mb-0">
                    <h2 className="font-semibold text-md">Quick Links</h2>
                    <ul className="mt-4">
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Menu">
                            <Link href="/menu">Menu</Link>
                        </li>
                    </ul>
                </div>

                <div className="text-center mb-4 lg:text-left lg:mb-0">
                    <h2 className="font-semibold text-md">Contact</h2>
                    <ul className="mt-4">
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Address">
                            <a className="flex items-center gap-2">
                                <GoLocation />
                                <span>Saritha</span>
                            </a>
                        </li>
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Phone">
                            <a className="flex items-center gap-2">
                                <BsTelephonePlus />
                                <span>+91 9876543234</span>
                            </a>
                        </li>
                        <li className="text-sm font-semibold text-gray-600" title="Email">
                            <a className="flex items-center gap-2">
                                <AiOutlineMail />
                                <span>contact@FlavorDash.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-center mb-4 lg:text-left lg:mb-0">
                    <h2 className="font-semibold text-md">Follow Us On</h2>
                    <ul className="mt-4">
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Facebook">
                            <Link href="">
                                <a className="flex items-center gap-2">
                                    <FaFacebookF />
                                    <span>/FlavorDash</span>
                                </a>
                            </Link>
                        </li>
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Twitter">
                            <Link href="">
                                <a className="flex items-center gap-2">
                                    <BsTwitter />
                                    <span>/FlavorDash</span>
                                </a>
                            </Link>
                        </li>
                        <li className="text-sm font-semibold text-gray-600" title="Instagram">
                            <Link href="">
                                <a className="flex items-center gap-2">
                                    <FaInstagram />
                                    <span>/FlavorDash</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
           
        </div>
    );
}

export default Footer;
