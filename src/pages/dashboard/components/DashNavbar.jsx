import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiMenu, FiX } from "react-icons/fi";
import Theme from "../../../components/common/Theme";
import Button from "../../../components/common/buttons/Button";
import Modal from "../../../components/ui/Modal";

const navItems = [
  { name: "Home", path: "/", icon: <FiHome /> },
  { name: "Profile", path: "/profile", icon: <FiUser /> },
  { name: "Settings", path: "/settings", icon: <FiSettings /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

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
        className={`hidden md:flex  text-md fixed top-0 left-0 h-full w-80 bg-white dark:bg-body-grey dark:text-white p-9 flex-col gap-6 transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition ${
              location.pathname === item.path ? "bg-gray-700 font-semibold" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            {item.icon}
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

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around items-center py-2 z-50 shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center text-sm ${
              location.pathname === item.path ? "text-blue-400" : "text-white"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Reusable Modal"
      >
        <p>This is a reusable modal component with custom content.</p>
        <div className="mt-4 text-right">
          <Button type="secondary" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
