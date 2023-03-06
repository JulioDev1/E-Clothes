import styled from "styled-components";
export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: white;
  justify-content: columns;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.27);
`;
export const NavBarContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;
export const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  border: 1px solid #cccccc;
  padding: 0 10px 0 20px;
`;
export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 500px;
`;
export const IconsRoute = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MenuContent = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  margin-left: 100px;
  justify-content: center;
  a {
    text-decoration: none;
    color: #000;
  }
  margin-top: 20px;
`;
interface IOptions {
  selected: boolean;
}

export const Options = styled.li<IOptions>`
  list-style: none;

  a {
    color: ${(props) => (props.selected ? "#E43F6F" : "black")};
    transition: 0.2s;
  }
`;

export const SearchDiv = styled.div`
  height: 2.5rem;
  width: 3.5rem;
  background-color: #e43f6f;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
