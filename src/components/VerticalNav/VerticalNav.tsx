import React, { useState } from "react";
import { Nav, IconWrapper } from "./VerticalNav.styled";
import Map from "../../assests/images/Map.png";
import IndexOne from "../../assests/images/secondIcon.png";
import IndexTwo from "../../assests/images/Group1.png";

interface NavProps {
  setIconStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Icon {
  src: string;
  id: number;
  active: boolean;
}
type IconType = Icon[];

const VerticalNav: React.FC<NavProps> = ({ setIconStatus }) => {
  const [navIcons, setNavIcons] = useState<IconType>([
    { src: Map, id: 1, active: true },
    { src: IndexOne, id: 2, active: false },
    { src: IndexTwo, id: 3, active: false },
  ]);

  const handleBtnClick = (
    e: React.MouseEvent<HTMLImageElement>,
    id: number
  ): void => {
    const cloneNavICon = [...navIcons];
    if (id === 1) {
      setIconStatus(true);
    } else {
      setIconStatus(false);
    }
    cloneNavICon.forEach((icn) => {
      if (icn?.id === id) {
        icn.active = true;
      } else if (icn?.active) {
        icn.active = false;
      }
      setNavIcons(cloneNavICon);
    });
  };

  return (
    <Nav>
      {navIcons?.map((icon) => (
        <IconWrapper
          src={icon?.src}
          key={icon?.id}
          alt={icon?.src}
          active={icon?.active}
          onClick={(e) => handleBtnClick(e, icon?.id)}
        />
      ))}
    </Nav>
  );
};

export default VerticalNav;
