import { useRouter } from "next/router";

import {
  InputContent,
  NavBarContent,
  NavBarContainer,
  MenuContent,
  Input,
  IconsRoute,
  SearchDiv,
  Options,
  Option,
  LogoContainer,
} from "./styled";

import { Logo } from "../../icons/Logo";
import { SearchIcon } from "../../icons/SearchIcon";
import { User } from "../../icons/User";
import { Cart } from "../../icons/Cart";

export const NavBar = () => {
  const router = useRouter();

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
        <Options>
          {menuListItems.map((item) => (
            <Option
              key={item.label}
              href={item.href}
              selected={item.href === router.pathname}
            >
              {item.label}
            </Option>
          ))}
        </Options>
      </MenuContent>
    </NavBarContainer>
  );
};
