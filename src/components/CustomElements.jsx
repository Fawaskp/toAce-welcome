import React from "react";

export function Button({
  ref,
  children,
  value,
  type,
  className,
  onClick,
  disabled,
  style,
}) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`bg-blue-500 font-semibold text-white rounded-lg m-2 p-3 ${
        className ? className : ""
      } ${
        disabled
          ? "bg-blue-300"
          : "hover:bg-blue-600 transition-all duration-300"
      }`}
      style={style}
    >
      {children ? children : value ? value : "Submit"}
    </button>
  );
}
