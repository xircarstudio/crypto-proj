import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-50">
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
        >
          &times;
        </button>

        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}
