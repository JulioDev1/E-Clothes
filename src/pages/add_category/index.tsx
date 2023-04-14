import { Category as CategoriesService } from "../../services/Category";
import { CategoriesList, Category } from "../../models/Categories";
import { useState } from "react";
import { Title, ConfigContainer, Form, Input, Button } from "../_styled";
import { CategoriesContainer } from "./styles";

interface AddCategoryProps {
  categories: CategoriesList;
}

const AddCategory: React.FC<AddCategoryProps> = ({ categories }) => {
  const [categoryName, setCategoryName] = useState("");

  function addCategory(evt: React.FormEvent<HTMLButtonElement>) {
    evt.preventDefault();

    if (categoryName) {
      const category = {
        value: categoryName,
        type: "category",
      };

      CategoriesService.addCategory(category);

      setCategoryName("");
    }
  }

  function handleCategoryName(evt: React.ChangeEvent<HTMLInputElement>) {
    const data = evt.target.value;
    setCategoryName(data);
  }

  return (
    <>
      <ConfigContainer>
        <Form>
          <Title>Add Category</Title>
          <Input
            type="text"
            onChange={handleCategoryName}
            placeholder="Category Name"
          />
          <Button onClick={addCategory}>Add</Button>
        </Form>

        <CategoriesContainer>
          {categories.map((category: Category, key) => {
            return <div key={key}>{category.value}</div>;
          })}
        </CategoriesContainer>
      </ConfigContainer>
    </>
  );
};

export default AddCategory;

export async function getStaticProps() {
  const categories = await CategoriesService.getCategories();

  return {
    props: {
      categories,
    },
  };
}
