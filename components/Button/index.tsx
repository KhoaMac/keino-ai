import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text?: string;
  icon?: any;
  background?: string;
  type?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  background = "primary",
  type = "default",
  onClick,
  className,
  disabled = false,
}) => {
  const ButtonType = {
    default: `bg-primary text-white`,
    disabled: `bg-primary-disabled text-white`,
    outline: `bg-white border-1 border-primary text-primary`,
    none: `text-${background} hover:bg-gray-scale-15`,
  }[type];

  return (
    <button
      className={`px-4 py-2.5 rounded-md text-body-medium-semibold flex items-center gap-2 ${twMerge(ButtonType,className)}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <Image src={icon} alt="btn-icon" />}
      {text}
    </button>
  );
};

export default Button;
