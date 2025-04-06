import React from "react";

function Button({ type, children, onClick, disabled, className, ...props }) {
  const typeVariants = {
    primary: "btn-primary btn dark:bg-body btn ",
    secondary: "btn btn-secondary ",
    primaryDark:
      "bg-body text-white shadow-custom-light transform hover:bg-primary hover:text-body hover:shadow-custom-dark hover:translate-y-[-2px] p-2 rounded dark:bg-primary dark:text-body dark:hover:bg-body dark:hover:text-white",
    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  };

  const buttonClass = `${typeVariants[type]} p-2 rounded ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
