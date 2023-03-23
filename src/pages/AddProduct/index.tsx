import api from '../../services/api.js';
import { useState, useEffect } from 'react';
import { Title, ConfigContainer } from "../styles";
import { 
    Form,
    NameInput,
    ImageUrlInput,
    DescriptionInput,
    PriceInput,
    Button
} from "./styles";

export const AddProduct = () => {
    const [ config, setConfig ] = useState([]);

    const [ name, setName ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ price, setPrice ] = useState("");

    function handleName(evt : any) {
        const data = evt.target.value;
        setName(data);
    }

    function handleImageUrl(evt : any) {
        const data = evt.target.value;
        setImageUrl(data);
    }

    function handleDescription(evt : any) {
        const data = evt.target.value;
        setDescription(data);
    }

    function handlePrice(evt : any) {
        const data = evt.target.value;
        setPrice(data);
    }

    function addProduct(evt : any) {
        evt.preventDefault();
        console.log('add product')

        if(name  &&  imageUrl  &&  description  &&  price) {
            api.post("/add_product", {
                name: name,
                imageUrl: imageUrl,
                description: description,
                price: price
            });
        }
    }

    useEffect(() => {
        api.get("/add_product").then((res) => setConfig(res.data));
    }, []);

    return (
        <div>
        <Title>Add Product</Title>

        <ConfigContainer>
            <Form action="">
                <NameInput type="text" name="name" onChange={handleName} placeholder='product name...'/>
                <ImageUrlInput type="text" name="imageUrl" onChange={handleImageUrl} placeholder='product image url...'/>
                <DescriptionInput type="text" name="description" onChange={handleDescription} placeholder='product description...'/>
                <PriceInput type="text" name="price" onChange={handlePrice} placeholder='product price...'/>

                <Button onClick={addProduct}>Add Product</Button>
            </Form>
        </ConfigContainer>

        </div>
    );
};