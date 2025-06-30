import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-2 px-4 w-fit text-sm text-white cursor-pointer font-medium bg-[#1777ff] border-1 border-transparent outline-3 outline-solid focus:border-white focus:outline-[#91caff]
 rounded-lg"
    >
      {children}
    </button>
  );
};

export default Button;
