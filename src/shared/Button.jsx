import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="rounded-md bg-yellow-500 text-stone-200 py-2 px-4 hover:bg-yellow-800 hover:text-stone-50"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
