import { useState, useEffect } from "react";
import { Button, Input, Title } from "../_styled";
import { PaymentContainer, ModalContainer, InputField, PaymentProductsContainer } from "./styled";
import { ProductsList, Product } from '../../models/Products';
import { PaymentProductsList } from '../../components/PaymentProductsList'
import { PaymentForm } from '../../components/PaymentForm';

interface PaymentDataProps {
  products: ProductsList
  card: any
}

const Payment: React.FC<PaymentDataProps> = ({products}) => {
  const  [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    products.map((product) => {
      setTotalPrice(totalPrice + product.price)
    });
  }, []);
  
  return (
    <PaymentContainer>
      <ModalContainer>
        <PaymentProductsList data = {products} totalPrice = {totalPrice}></PaymentProductsList>
        <PaymentForm></PaymentForm>
      </ModalContainer>
    </PaymentContainer>
  );
};
export default Payment;

export async function getStaticProps() {
  //const products = await paymentService.get('/payment/')
  const products = [
    {id: 1, category: "underwear", gender: 0, name: "Cueca Boxer Azul", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 15.00, promo: 10, imgUrl: "", sizes: "{p: 10, m: 10, eg: 0, g: 10, gg: 10}"},
    {id: 2, category: "underwear", gender: 0, name: "Cueca Slip Preta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 49.90, promo: 0, imgUrl: "", sizes: "{p: 10, m: 210, eg: 120, g: 120, gg: 10}"},
    {id: 3, category: "underwear", gender: 0, name: "Cueca Slip Rosa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", price: 49.90, promo: 0, imgUrl: "", sizes: "{p: 10, m: 10, eg: 10, g: 0, gg: 0}"},
    {id: 4, category: "underwear", gender: 0, name: "Kit Cueca Boxer Azul", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", price: 50.00, promo: 0, imgUrl: "", sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}"},
    {id: 5, category: "underwear", gender: 0, name: "Cueca Slip Preto Azulada Fibra", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", price: 49.90, promo: 0, imgUrl: "", sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}"},
    {id: 6, category: "underwear", gender: 0, name: "Cueca Boxer Preta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 29.90, promo: 10, imgUrl: "", sizes: "{p: 10, m: 20, eg: 0, g: 0, gg: 0}"},
    {id: 7, category: "underwear", gender: 0, name: "Kit Cueca Boxer Azul, Verde, Preta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 70.00, promo: 20, imgUrl: "", sizes: "{p: 30, m: 10, eg: 10, g: 10, gg: 10}"},
    {id: 8, category: "underwear", gender: 0, name: "Curca Slip Branca Algodão", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 149.90, promo: 0, imgUrl: "", sizes: "{p: 10, m: 0, eg: 10, g: 10, gg: 10}"},
    {id: 9, category: "underwear", gender: 0, name: "Cueca Boxer Branca ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 49.90, promo: 0, imgUrl: "", sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}"},
    {id: 4, category: "underwear", gender: 0, name: "Kit Cueca Boxer Azul", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", price: 50.00, promo: 0, imgUrl: "", sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}"},
    {id: 5, category: "underwear", gender: 0, name: "Cueca Slip Preto Azulada Fibra", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", price: 49.90, promo: 0, imgUrl: "", sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}"},
    {id: 6, category: "underwear", gender: 0, name: "Cueca Boxer Preta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 29.90, promo: 10, imgUrl: "", sizes: "{p: 10, m: 20, eg: 0, g: 0, gg: 0}"},
    {id: 7, category: "underwear", gender: 0, name: "Kit Cueca Boxer Azul, Verde, Preta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 70.00, promo: 20, imgUrl: "", sizes: "{p: 30, m: 10, eg: 10, g: 10, gg: 10}"},
    {id: 8, category: "underwear", gender: 0, name: "Curca Slip Branca Algodão", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 149.90, promo: 0, imgUrl: "", sizes: "{p: 10, m: 0, eg: 10, g: 10, gg: 10}"},
    {id: 9, category: "underwear", gender: 0, name: "Cueca Boxer Branca ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 49.90, promo: 0, imgUrl: "", sizes: "{p: 10, m: 10, eg: 10, g: 10, gg: 10}"},
  ]
  
  return {
      props: {
        products,
      },
  }
  }
