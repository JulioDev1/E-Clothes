import styled from "styled-components";

export const PaymentContainer = styled.form`
  display: flex;
  justify-content: center;

  h1 {
    color: #e43f6f;
  }
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  background-color: white;
  border-radius: 5px;
  width: 1020px;
  height: 520px;
  filter: drop-shadow(2px 13px 6px rgba(0, 0, 0, 0.39));
  padding: 25px;
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    left: 5px;
  }

  input:focus + svg path {
    color: #e43f6f;
  }
`;

export const PaymentProductsContainer = styled.div`
display: flex;
justify-content: center;

h1 {
  color: #e43f6f;
}
`;

