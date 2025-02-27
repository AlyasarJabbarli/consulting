import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavLinkCustomProps {
  to: string;
  children: ReactNode;
  isButton?: boolean;
  icon?: ReactNode;
}

const NavLinkCustom = ({ to, children, isButton, icon }: NavLinkCustomProps) => {
  return (
    <NavLink
      to={to}
      className={`flex items-center font-semibold hover:text-lightBlue duration-150 h-fit
        ${
          isButton
            ? "border-2 border-blue-600 px-9 py-3"
            : "px-4"
        }
      `}
    >
      {icon && <span className="block w-5 mr-3 text-lightBlue">{icon}</span>}
      {children}
    </NavLink>
  );
};

export default NavLinkCustom;
