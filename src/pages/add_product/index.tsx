import api from "../../services/api";
import { useState, useEffect, ChangeEvent } from "react";
import { Title, ConfigContainer, Form, Button } from "../_styled";
import {
  NameInput,
  ImageUrlInput,
  DescriptionInput,
  PriceInput,
} from "./styles";

const AddProduct = () => {
  const [config, setConfig] = useState([]);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleName(evt: React.ChangeEvent<HTMLInputElement>) {
    const data = evt.target.value;
    setName(data);
  }

  function handleImageUrl(evt: React.ChangeEvent<HTMLInputElement>) {
    const data = evt.target.value;
    setImageUrl(data);
  }

  function handleDescription(evt: React.ChangeEvent<HTMLInputElement>) {
    const data = evt.target.value;
    setDescription(data);
  }

  function handlePrice(evt: React.ChangeEvent<HTMLInputElement>) {
    const data = evt.target.value;
    setPrice(data);
  }

  function addProduct(evt: React.FormEvent<HTMLButtonElement>) {
    evt.preventDefault();

    if (name && imageUrl && description && price) {
      api.post("/add_product", {
        name: name,
        imageUrl: imageUrl,
        description: description,
        price: price,
      });
    }
  }

  useEffect(() => {
    api.get("/add_product").then((res) => setConfig(res.data));
  }, []);

  return (
    <div>
      <ConfigContainer>
        <Title>Add Product</Title>
        <Form action="">
          <NameInput
            type="text"
            name="name"
            onChange={handleName}
            placeholder="product name..."
          />
          <ImageUrlInput
            type="text"
            name="imageUrl"
            onChange={handleImageUrl}
            placeholder="product image url..."
          />
          <DescriptionInput
            type="text"
            name="description"
            onChange={handleDescription}
            placeholder="product description..."
          />
          <PriceInput
            type="text"
            name="price"
            onChange={handlePrice}
            placeholder="product price..."
          />

          <Button onClick={addProduct}>Add Product</Button>
        </Form>
      </ConfigContainer>
    </div>
  );
};

export default AddProduct;
