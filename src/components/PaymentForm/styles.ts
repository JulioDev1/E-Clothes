import styled from "styled-components";
import { Barcode } from '@styled-icons/remix-line/Barcode';
import { Pix } from '@styled-icons/fa-brands/Pix';
import { CreditCard } from '@styled-icons/icomoon/CreditCard';
import { StyledIcon } from '@styled-icons/styled-icon';

interface PaymentOptionProps {
  onClick: (e: Event) => void
  children?: React.ReactNode;
}

export const ProductsListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
  border-radius: 4px;
  font-family: "Roboto";
  transition: all 0.2s;
  text-decoration: none;
`;
  
export const PaymentOptionsContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const PaymentOption: React.FC<PaymentOptionProps> = styled.div<PaymentOptionProps>`
  width: 135px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  color: #7765E3;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
`

export const OptionIconContainer = styled.div`
  width: 35px;
  height: 22px;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

export const Label = styled.label`
  margin-bottom: 25px;
  font-size: 11px;
  font-weight: 500;
`

export const LargeField = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  padding: 3px 10px;
  color: rgba(0, 0, 0, 0.8);
`

export const MinorField = styled.input`
  width: 30%;
  height: 30px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  margin-top: 20px;
`

export const MinorFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const FlexDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`

export const CheckBoxContainer = styled.div`
  font-size: 11px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const CheckBox = styled.input.attrs({type: 'checkbox'})`
  border-radius: 50%;
  margin-right: 10px;
`

export const BluePix = styled<StyledIcon>(Pix)`
  color: #7765E3;
  width: 20px;
  height: 20px;
`

export const BlueCreditCard = styled<StyledIcon>(CreditCard)`
  color: #7765E3;
  width: 20px;
  height: 20px;
`

export const BlueBarcode = styled<StyledIcon>(Barcode)`
  color: #7765E3;
  width: 20px;
  height: 20px;
`
