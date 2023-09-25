interface SimpleMenuItemProps {
  title: string;
  path: string;
}

export const SimpleMenuItem = ({ title, path }: SimpleMenuItemProps) => (
  <a
    href={path}
    className="block w-MENU_WIDTH bg-menu-background px-5 py-6 hover:bg-menu-itemHover"
  >
    {title}
  </a>
);
