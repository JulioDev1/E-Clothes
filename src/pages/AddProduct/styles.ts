import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    gap: 15px;
`

export const Input = styled.input`
    padding: 5px 10px;
    border-radius: 2px;
    border: 1px solid gray;
    width: 100%;
`

export const NameInput = styled(Input)`
    
`

export const ImageUrlInput = styled(Input)`
    
`

export const DescriptionInput = styled(Input)`
    height: 50px;
`

export const PriceInput = styled(Input)`
    
`

export const Button = styled.button`
    padding: 5px 10px;
    cursor: pointer;
`