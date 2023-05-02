import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { Category as CategoriesService } from '../../services/Category';
import { CategoriesList, Category } from '../../models/Categories';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../pages/storyCategory';

import {
  InputContent,
  NavBarContainer,
  MenuContainer,
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
  const stateCategory = useSelector((state: any) => state.category)
  const dispatch = useDispatch();
  const router = useRouter();
  const [ categories, setCategories ] = useState<CategoriesList>([]);

  async function getCategories() {
    const data: CategoriesList = await CategoriesService.getCategories();
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);
  
  return (
    <NavBarContainer>
      <LogoContainer onClick={() => window.location.assign('/')} >
        <Logo />
      </LogoContainer>

      <MenuContainer>
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
              onClick={() => 
                dispatch(changeCategory({value: category.value, type: category.type}))}
              selected={category.value === stateCategory.value}
              >
              {category.value}
            </Option>
          ))}
        </Options>
      </MenuContainer>
              <IconsRoute>
                <a href="/user">
                  <User />
                </a>
                <a href="/cart">
                  <Cart />
                </a>
              </IconsRoute>
    </NavBarContainer>
  );
};
