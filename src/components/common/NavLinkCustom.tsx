import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavLinkCustomProps {
  to: string;
  children: string;
  isBgBlack?: boolean;
  isButton?: boolean;
  icon?: ReactNode;
  isBold?: boolean;
}

const NavLinkCustom = ({ to, children, isBgBlack, isButton, icon, isBold }: NavLinkCustomProps) => {
  return (
    <NavLink
      to={to}
      className={`flex items-center duration-150 h-fit
        ${isButton
          ? "border-2 border-blue-600 px-9 py-3"
          : ""
        }
        ${isBgBlack ? `hover:text-goldHover` : "hover:text-lightBlue px-4" }
        ${isBold && "font-semibold"}
        
      `}
    >
      {icon && <span className={`block w-5 mr-3 ${isBgBlack ? "text-purpleHeading" : "text-lightBlue"}`}>{icon}</span>}
      {children}
    </NavLink>
  );
};

export default NavLinkCustom;
