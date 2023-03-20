import { Link } from "react-router-dom";
import {
  InputContent,
  NavBarContent,
  NavBarContainer,
  MenuContent,
  Input,
  IconsRoute,
  SearchDiv,
  Options,
} from "./styled";

import { Logo } from "../../icons/Logo";
import { SearchIcon } from "../../icons/SearchIcon";
import { User } from "../../icons/User";
import { Cart } from "../../icons/Cart";
import { useState } from "react";
export const NavBar = () => {
  const options = [
    { path: "/", name: "Home", id: 1 },
    { path: "/feminine", name: "Female", id: 2 },
    { path: "/masculine", name: "Male", id: 3 },
  ];
  const [select, setSelect] = useState(false);

  return (
    <NavBarContainer>
      <NavBarContent>
        <Logo />
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
        {options.map((option) => (
          <Options
            selected={option.path === window.location.pathname}
            key={option.id}
          >
            <Link
              to={option.path}
              key={option.id}
              onClick={() => setSelect(!select)}
            >
              {option.name}
            </Link>
          </Options>
        ))}
      </MenuContent>
    </NavBarContainer>
  );
};
