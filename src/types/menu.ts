export interface MenuItemInterface {
  id: string;
  title: string;
}

export interface SimpleMenuItemInterface extends MenuItemInterface {
  title: string;
  path: string;
}

export interface SubMenuItemInterface extends MenuItemInterface {
  title: string;
  menu: (SimpleMenuItemInterface | SubMenuItemInterface)[];
}
