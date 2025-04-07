import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiMenu, FiX } from "react-icons/fi";
import Theme from "../../../components/common/Theme";
import Button from "../../../components/common/buttons/Button";
import Modal from "../../../components/ui/Modal";
import { FaEllipsisH } from "react-icons/fa";
import NavPopup from "./NavPopup";

const navItems = [
  { name: "Home", path: "/", icon: <FiHome /> },
  { name: "Profile", path: "/profile", icon: <FiUser /> },
  { name: "Settings", path: "/settings", icon: <FiSettings /> },
  { name: "More", icon: <FaEllipsisH />, popup: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const handleItemClick = (item) => {
    if (item.popup) {
      setShowPanel(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="pt-4 md:pt-10 px-4 md:px-5 xl:px-15">
      <div className="bg-white dark:bg-black flex flex-row justify-between items-center">
        <div>
          <h1 className="text-md text-amber-50 dark:text-amber-300">
            DashBoard
          </h1>
        </div>
        <div className="hidden md:flex z-50">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-body dark:text-primary text-3xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={`hidden md:flex gap-10 fixed top-0 left-0 h-full w-80 bg-white dark:bg-body-grey
            p-9 flex-col  transition-transform duration-300 z-40 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-2 rounded text-gray-700 dark:text-grey hover:text-black dark:hover:text-white transition text-md font-bold ${
              location.pathname === item.path
                ? "text-primary font-semibold"
                : ""
            }`}
            onClick={() => setOpen(false)}
          >
            <span className="text-2xl"> {item.icon}</span>
            {item.name}
          </Link>
        ))}
        <Theme />
        <Button type="primaryDark" onClick={() => alert("Button clicked!")}>
          Click Me
        </Button>
        <Button type="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
      </div>

      {open && (
        <div className="hidden md:block fixed inset-0 bg-gray-300 dark:bg-black opacity-50 z-30" />
      )}

      <div
        className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-body  
      text-gray-700 dark:text-grey hover:text-black dark:hover:text-white flex justify-around items-center py-2 z-50 shadow-lg"
      >
        {navItems.map((item, index) =>
          item.popup ? (
            <button
              key={index}
              onClick={() => handleItemClick(item)}
              className="flex flex-col items-center text-sm focus:outline-none"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ) : (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center text-sm  ${
                location.pathname === item.path
                  ? "text-body dark:text-white"
                  : "text-gray-700 dark:text-grey hover:text-black dark:hover:text-white"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          )
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Reusable Modal"
      >
        <p>This is a reusab modal component with custom content.</p>
        <div className="mt-4 text-right">
          <Button type="secondary" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>

      <div
        className={`md:hidden fixed bottom-0 left-0 w-full  mx-auto
           bg-white dark:bg-body-grey rounded-t-xl p-4 z-50  transform transition-transform duration-300 ${
             showPanel ? "-translate-y-12" : "translate-y-full"
           }`}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">More Options</h3>
          <button
            onClick={() => setShowPanel(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
          >
            Close
          </button>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <NavPopup />
        </p>
      </div>

      {showPanel && (
        <div
          onClick={() => setShowPanel(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}
    </div>
  );
}
