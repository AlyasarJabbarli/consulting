import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavLinkCustomProps {
  to: string;
  children: ReactNode;
  isBgBlack?: boolean;
  isButton?: boolean;
  icon?: ReactNode;
}

const NavLinkCustom = ({ to, children, isBgBlack, isButton, icon }: NavLinkCustomProps) => {
  return (
    <NavLink
      to={to}
      className={`flex items-center font-semibold duration-150 h-fit
        ${isButton
          ? "border-2 border-blue-600 px-9 py-3"
          : ""
        }
        ${isBgBlack ? `hover:text-goldHover` : "hover:text-lightBlue px-4"}
      `}
    >
      {icon && <span className={`block w-5 mr-3 ${isBgBlack ? "text-purpleHeading" : "text-lightBlue"}`}>{icon}</span>}
      {children}
    </NavLink>
  );
};

export default NavLinkCustom;
