import { useState } from "react";

export const useMenuToggle = () => {
  const [activeMenus, setActiveMenus] = useState<string[]>([]);
  const [animation, setAnimation] = useState("slideIn");

  const back = () => {
    if (activeMenus.length) {
      setAnimation("slideOut");
      setActiveMenus([...activeMenus.slice(0, -1)]);
    }
  };

  const handleArrowClick = (menuName: string) => {
    const newActiveMenus = [...activeMenus];

    newActiveMenus.push(menuName);
    setActiveMenus(newActiveMenus);
  };

  return { activeMenus, handleArrowClick, back, animation };
};
