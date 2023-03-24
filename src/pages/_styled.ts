import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 6px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  gap: 20px;

  @media (min-width: 360px) {
    padding: 26px 16px;
  }

  @media (min-width: 480px) {
    padding: 26px;
  }
`;