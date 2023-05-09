import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;

  h1 {
    color: #e43f6f;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  width: 25rem;
  filter: drop-shadow(2px 13px 6px rgba(0, 0, 0, 0.39));
  padding: 36px;
  gap: 22px;
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
