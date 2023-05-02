
import { Title, ConfigContainer, Form, Button } from "../_styled";

const cart = () => {


    return (
        <div>
            <ConfigContainer>
                <Title>Cart</Title>
            </ConfigContainer>
        </div>
    )
}

export default cart

export async function getStaticProps() {
    //const products = await CartProductsService.getProducts();

return {
    props: {
        //products
    }
}
}