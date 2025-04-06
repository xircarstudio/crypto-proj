import React from "react";

function Card({ title, children, icon, footer, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-body shadow-md rounded-lg p-6 transition-colors duration-300 w-full     ${className}`}
    >
      {icon && <div className="mb-4">{icon}</div>}
      {title && (
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
      )}
      <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {children}
      </div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}

export default Card;
