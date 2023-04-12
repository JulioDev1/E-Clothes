import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { Category as CategoriesService } from '../../services/Category';
import { CategoriesList, Category } from '../../models/Categories';

import {
  InputContent,
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
  const [ categories, setCategories ] = useState<CategoriesList>([]);


  async function getCategories() {
    const data: CategoriesList = await CategoriesService.getCategories();
    setCategories(data);
  }

  useEffect(() => {
    getCategories()
  }, []);
  
  return (
    <NavBarContainer>
      <LogoContainer onClick={() => window.location.assign('/')} >
        <Logo />
      </LogoContainer>

      <MenuContent>
        <InputContent>
          <Input type="text" placeholder="Search" />
          <SearchDiv>
            <SearchIcon />
          </SearchDiv>
        </InputContent>

        <Options>
          {categories.map((category: Category, key) => (
            <Option
              key={key}
              selected={category.value === router.pathname}
              >
              {category.value}
            </Option>
          ))}
        </Options>
      </MenuContent>
              <IconsRoute>
                <User />
                <Cart />
              </IconsRoute>
    </NavBarContainer>
  );
};
