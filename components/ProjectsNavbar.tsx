import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  catName: Category;
  handlerFilterCategory: Function;
  active: string;
}> = ({ catName, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-red-500";
  if (active === catName) className += " text-red-500";

  return (
    <li className={className} onClick={() =>

      handlerFilterCategory(catName)}>
      {catName}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem catName="all" {...props} />
      <NavItem catName="react" {...props} />
      <NavItem catName="vue" {...props} />
      <NavItem catName="django" {...props} />
      <NavItem catName="node" {...props} />
      <NavItem catName="laravel" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
