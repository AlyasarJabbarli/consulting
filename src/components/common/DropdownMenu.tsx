import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import NavLinkCustom from "./NavLinkCustom";

interface DropdownProps {
  label: string; // Button text (e.g., "Pages")
  links?: { to: string; text: string }[]; // List of dropdown links
  className?: string; // Custom styles
  children?: React.ReactNode; // Optional custom content
}

const DropdownMenu: React.FC<DropdownProps> = ({ label, links, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Button */}
      <div className="inline-flex items-center hover:text-lightBlue duration-150 cursor-pointer">
        <NavLinkCustom to="#">{label}</NavLinkCustom>
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-7" />
      </div>

      {/* Dropdown Items */}
      {isOpen && (
        <div className="absolute left-0 z-10 w-52 bg-white shadow-lg border-t-lightBlue border-t-2 transition-transform transform scale-100 opacity-100">
          <ul className="flex flex-col p-4 gap-y-2">
            {links &&
              links.map((link, index) => (
                <li key={index}>
                  <NavLinkCustom to={link.to} >
                    {link.text}
                  </NavLinkCustom>
                </li>
              ))}
            {children}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
