import {
  SimpleMenuItemInterface,
  SubMenuItemInterface,
} from "../../types/menu";
import { isSimpleMenuItem, isSubMenuItem } from "../../utils/guards/menuGuards";
import { Arrow } from "../Icons/Arrow";
import { SimpleMenuItem } from "./SimpleMenuItem";
import "./animation.css";
import { useMenuToggle } from "./useMenuToggle";

interface MenuProps {
  depth: number;
  data: SimpleMenuItemInterface | SubMenuItemInterface;
}

interface SubMenuItemProps {
  depth: number;
  menu: (SimpleMenuItemInterface | SubMenuItemInterface)[];
}

export const Menu = ({ depth, data }: MenuProps) => {
  const { activeMenus, handleArrowClick, back } = useMenuToggle();

  const SubMenuItem = ({ depth, menu }: SubMenuItemProps) => {
    return (
      <ul
        className={`absolute w-MENU_WIDTH top-0 bottom-0 bg-white`}
        style={{
          zIndex: depth,
        }}
      >
        <li
          className="bg-menu-background px-5 py-6 hover:bg-menu-itemHover cursor-pointer"
          onClick={back}
        >
          <Arrow className="rotate-180" />
        </li>
        {menu.map((subMenu) => (
          <Menu depth={depth + 1} data={subMenu} />
        ))}
      </ul>
    );
  };

  return (
    <li>
      {isSimpleMenuItem(data) && (
        <SimpleMenuItem title={data.title} path={data.path} />
      )}
      {isSubMenuItem(data) && (
        <>
          <div
            className="group flex justify-between bg-menu-background px-5 py-6 hover:bg-menu-itemHover cursor-pointer"
            onClick={() => handleArrowClick(data.id)}
          >
            <p>{data.title}</p>
            <Arrow className="fill-menu-icons group-hover:fill-menu-iconsHover" />
          </div>
          {activeMenus.includes(data.id) && (
            <SubMenuItem depth={depth} menu={data.menu} key={data.id} />
          )}
        </>
      )}
    </li>
  );
};
