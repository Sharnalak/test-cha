import {
  SimpleMenuItemInterface,
  SubMenuItemInterface,
} from "../../types/menu";

export function isSimpleMenuItem(
  menuItem: SimpleMenuItemInterface | SubMenuItemInterface
): menuItem is SimpleMenuItemInterface {
  return (menuItem as SimpleMenuItemInterface).path !== undefined;
}

export function isSubMenuItem(
  menuItem: SimpleMenuItemInterface | SubMenuItemInterface
): menuItem is SubMenuItemInterface {
  return (menuItem as SubMenuItemInterface).menu !== undefined;
}
