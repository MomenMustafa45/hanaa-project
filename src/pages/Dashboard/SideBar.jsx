/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaTh, FaBook, FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { FaUserPlus } from "react-icons/fa6";


function SideBar({ activeItem, onItemClick }) {
    const { t, i18n } = useTranslation("global");    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    const [isOpen, setIsOpen] = useState(false);
    const isRtl = i18n.language === "ar";
    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    const items = [
        { name: t("sidebar.dashboard"), icon: <FaTh className="text-[#f5bc42]" /> },
        { name: t("sidebar.permissions"), icon: <FaBook className="text-[#f5bc42]" /> },
        { name:t("sidebar.employees"), icon: <FaUsers className="text-[#f5bc42]" /> },
        { name: t("sidebar.editAppearance"), icon: <IoSettingsSharp className="text-[#f5bc42]" /> },
        { name:t("sidebar.addUser"), icon: <FaUserPlus  className="text-[#f5bc42]"  />}

    ];

    return (
        <>
        <button
                className={`lg:hidden fixed top-4 ${isRtl ? "left-4" : "right-4"} z-50 bg-[#f5bc42] p-2 rounded-md text-white`}
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                <FiMenu size={24} />
            </button>


           
            <div
                className={`Sidebar w-64 h-full bg-[#696969] text-white fixed transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : isRtl ? "-translate-x-full" : "translate-x-full"
                } ${isRtl ? "right-0" : "left-0"} lg:translate-x-0 lg:block hidden`}
            >
          
                <div className="pt-10">
                    {items.map(({ name, icon }) => (
                        <div
                            key={name}
                            className={`flex items-center justify-around p-4 text-lg font-bold cursor-pointer ${
                                activeItem === name ? "bg-gray-100 text-[#525353] " : ""
                            }`}
                            onClick={() => {
                                onItemClick(name);
                                toggleSidebar(); 
                            }}
                            aria-label={`Navigate to ${name}`}
                        >  
                          {icon}   {name}
                         
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SideBar;