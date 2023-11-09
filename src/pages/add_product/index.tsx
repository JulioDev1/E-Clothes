import api from "../../services/api";
import { useState, useEffect, ChangeEvent } from "react";
import { Title, ConfigContainer, Form, Button, Input } from "../_styled";
import {
  DescriptionInput,
  Container,
  Header,
  Preview,
  ButtonWrapper,
  ProductInfosContainer,
  ProductName,
  ProductDescription,
  ProductPrice,
  ActionButton,
  ProductsFooter
} from "./styles";
import Image from "next/image";

const AddProduct = () => {
  const [config, setConfig] = useState([]);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");

  function handleName(evt: React.ChangeEvent<HTMLInputElement>) {
    const data = evt.target.value;
    setName(data);
  }

  function handleGender(evt: React.ChangeEvent<HTMLInputElement>) {
    const data = evt.target.value;
    setGender(data);
  }

  function handleImageUrl(evt: React.ChangeEvent<HTMLInputElement>) {
    const data = evt.target.value;
    setImageUrl(data);
  }

  function handleDescription(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    const data = evt.target.value;
    setDescription(data);
  }

  function handlePrice(evt: React.ChangeEvent<HTMLInputElement>) {
    const data = evt.target.value;
    setPrice(data);
  }

  function addProduct(evt: React.FormEvent<HTMLButtonElement>) {
    evt.preventDefault();

    if (name && imageUrl && description && price && gender) {
      api.post("/add_product", {
        name: name,
        imageUrl: imageUrl,
        description: description,
        price: price,
        gender: gender
      });
    }
  }

  useEffect(() => {
    api.get("/add_product").then((res) => setConfig(res.data));
  }, []);

  return (
    <Container>
      <Header>
        <Input
          type="text"
          name="name"
          onChange={handleName}
          placeholder="product name..."
        />
        <Input
          type="text"
          name="imageUrl"
          onChange={handleImageUrl}
          placeholder="product image url..."
        />
        <Input
          type="text"
          name="gender"
          onChange={handleGender}
          placeholder="product gender"
        />
        <Input
          type="text"
          name="price"
          onChange={handlePrice}
          placeholder="product price..."
        />
        <DescriptionInput
          name="description"
          onChange={handleDescription}
          placeholder="product description..."
        />
        <ButtonWrapper>
          <Button onClick={addProduct}>Add Product</Button>
        </ButtonWrapper>
      </Header>
      <Preview>
        <Image src="" alt="a" width={420} height={270} />
        <ProductInfosContainer>
          <ProductName>{name || "Nome do produto"}</ProductName>
          <ProductDescription>
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget velit at risus sagittis malesuada. Curabitur tincidunt, velit nec rhoncus tincidunt, erat elit convallis tortor, at ullamcorper arcu justo eu libero. Nunc facilisis sapien at nulla lacinia, sit amet aliquet nisl tincidunt. Fusce id fermentum justo. In vehicula ultrices arcu nec fermentum. Sed semper vehicula lorem, a tempus quam. Nullam eget felis nec sapien tincidunt scelerisque. Nullam vehicula tortor eu nunc venenatis, at dapibus tortor posuere. Etiam sed elit eu dolor eleifend lacinia. Vestibulum dignissim ultrices nulla, non tincidunt elit. Suspendisse potenti."
            }
          </ProductDescription>
          <ProductsFooter>
            <ProductPrice>{price ? `Preço: R$ ${price}` : 'Preço: R$ 00.0'}</ProductPrice>
            <ActionButton type="button" onClick={() => {}}>ADICIONAR AO CARRINHO</ActionButton>
          </ProductsFooter>
        </ProductInfosContainer>
      </Preview>
    </Container>
  );
};

export default AddProduct;
