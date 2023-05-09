import { useState } from "react";
import { Button, Input, Title } from "../_styled";
import { FormContainer, InputContainer, InputField } from "./styled";
import { Email } from "../../icons/Email";
import { UserField } from "../../icons/UserField";
import { Lock } from "../../icons/Lock";

interface UserDataProps {
  name: string;
  surName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const User = () => {
  const [data, setData] = useState<UserDataProps>({
    name: "",
    surName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setData((prev) => {
      const newData = { ...prev, [name]: value };

      return newData;
    });
  }

  console.log(data);

  return (
    <FormContainer>
      <InputContainer>
        <Title>REGISTER</Title>
        <InputField>
          <UserField />
          <Input
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
          />{" "}
        </InputField>
        <InputField>
          <UserField />
          <Input
            name="surName"
            value={data.surName}
            onChange={handleChange}
            placeholder="Digite seu sobrenome"
          />
        </InputField>
        <InputField>
          <Email />
          <Input
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Digite seu E-mail"
          />
        </InputField>
        <InputField>
          <Lock />
          <Input
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
          />
        </InputField>
        <InputField>
          <Lock />
          <Input
            name="repeatPassword"
            value={data.repeatPassword}
            onChange={handleChange}
            placeholder="Repita sua senha"
          />
        </InputField>
        <Button>REGISTRAR</Button>
      </InputContainer>
    </FormContainer>
  );
};
export default User;
