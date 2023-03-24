import {
  InputContent,
  NavBarContent,
  NavBarContainer,
  MenuContent,
  Input,
  IconsRoute,
  SearchDiv,
  Options,
  LogoContainer,
} from "./styled";

import { Logo } from "../../icons/Logo";
import { SearchIcon } from "../../icons/SearchIcon";
import { User } from "../../icons/User";
import { Cart } from "../../icons/Cart";
// import { useState } from "react";
export const NavBar = () => {
  // const [select, setSelect] = useState(false);

  const menuListItems = [
    { label: 'Man', href: '/man' },
    { label: 'Woman', href: '/woman' },
    { label: 'Pants', href: '/pants' },
    { label: 'T-Shirts', href: '/t_shirts' },
    { label: 'Underwear', href: '/underwear' },
  ]
  
  return (
    <NavBarContainer>
      <NavBarContent>
        <LogoContainer onClick={() => window.location.assign('/')} >
          <Logo />
        </LogoContainer>
        
        <InputContent>
          <Input type="text" placeholder="Search" />
          <SearchDiv>
            <SearchIcon />
          </SearchDiv>
        </InputContent>

        <IconsRoute>
          <User />
          <Cart />
        </IconsRoute>
      </NavBarContent>

      <MenuContent>
        <Options selected={false}>
          {menuListItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </Options>
      </MenuContent>
    </NavBarContainer>
  );
};
