import { Product, ProductsList } from "../../models/Products";
import { Button, Input, Title } from "../../pages/_styled";
import {
  ProductsListContainer,
  PaymentOptionsContainer,
  PaymentOption,
  OptionIconContainer,
  FormContainer,
  Label,
  LargeField,
  MinorField,
  MinorFieldsContainer,
  FlexDiv,
  CheckBoxContainer,
  CheckBox,
  BluePix,
  BlueCreditCard,
  BlueBarcode
} from "./styles";



export const PaymentForm: React.FC = ()=> {
  function changePaymentMethod(method: string) {
    console.log(method)
    return method;
  }

  return (
    <ProductsListContainer>
      <PaymentOptionsContainer>
        <PaymentOption  onClick={() => {changePaymentMethod('card')}}>
          <OptionIconContainer>
            <BlueCreditCard></BlueCreditCard>
          </OptionIconContainer>
          Cartão de Crédito
        </PaymentOption>

        <PaymentOption  onClick={() => {changePaymentMethod('pix')}}>
          <OptionIconContainer>
            <BluePix></BluePix>
          </OptionIconContainer>
          Pix
        </PaymentOption>

        <PaymentOption onClick={() => {changePaymentMethod('barcode')}}>
          <OptionIconContainer>
            <BlueBarcode></BlueBarcode>
          </OptionIconContainer>
          Boleto Bancário
        </PaymentOption>
      </PaymentOptionsContainer>

      <FormContainer>
        <Label>Nome Escrito no Cartão</Label>
        <LargeField></LargeField>

        <Label>Numero do Cartão</Label>
        <LargeField></LargeField>

        <MinorFieldsContainer>
          <FlexDiv>
            <Label>Vencimento</Label>
            <LargeField></LargeField>
          </FlexDiv>
          
          <FlexDiv>
            <Label>CVV</Label>
            <LargeField></LargeField>
          </FlexDiv>
        </MinorFieldsContainer>

        <CheckBoxContainer>
          <CheckBox></CheckBox>
          Se lembrar do cartão
        </CheckBoxContainer>

        <Button>Pagar Agora</Button>
      </FormContainer>

    </ProductsListContainer>
  );
};
