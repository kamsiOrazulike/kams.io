"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Option {
  id: number;
  icon: any;
  label: string;
}

interface DropdownMenuProps {
  options: Option[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    // do something with the selected option
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center justify-center w-full text-md font-medium"
        onClick={handleDropdownToggle}
      >
        Upgrade your seat&nbsp;
        <MdOutlineKeyboardArrowDown size={14} />
      </button>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute z-50 py-2 w-full flex flex-col justify-center items-center rounded-md transition-all duration-300 bg-gray-100`}
      >
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className="w-[100%] px-4 py-2 text-md text-gray-600  hover:text-black"
            onClick={() => handleOptionClick(option)}
          >
            <div className="w-full my-1 flex flex-row items-center hover:scale-[1.10] transition-all duration-200">
              <div className="mx-2">{option.icon} </div>
              {option.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
