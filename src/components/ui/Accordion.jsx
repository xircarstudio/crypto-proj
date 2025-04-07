import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full rounded border border-gray-300 dark:border-gray-700 mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 text-left"
      >
        <span className="font-medium">{title}</span>
        <span className="ml-4 text-gray-600 dark:text-gray-300">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen p-4 pt-0" : "max-h-0 p-0"
        }`}
      >
        {isOpen && (
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
