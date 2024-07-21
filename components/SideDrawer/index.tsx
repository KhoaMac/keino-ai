// components/SideDrawer.tsx
import React from "react";
import IconClose from "@/public/assets/icons/close.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  return (
    <>
      <div
        className={twMerge(
          `fixed top-0 right-0 h-full w-44 bg-white text-gray-scale-100 transform py-10 px-[3.125rem] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`,
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-14 right-14 text-white w-6 h-6"
        >
          <Image src={IconClose} alt="close" layout="fill" />
        </button>
        {children}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-scale-100 opacity-50 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default SideDrawer;
