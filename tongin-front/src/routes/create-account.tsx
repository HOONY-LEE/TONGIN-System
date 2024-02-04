import styled from "styled-components";
import { Container, Wrapper } from "../components/common/flexWrapper";
import { InputComponent } from "../components/common/InputComponent";

const Title = styled.div`
  width: 40%;
  height: 60px;
  outline: 1px solid red;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateArea = styled.div`
  width: 100%;
  height: 70%;
  outline: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export default function CreateAccount() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>사원 관리</Title>
          <CreateArea>
            <InputComponent
              label={"사원 이름"}
              inputType={"text"}
            ></InputComponent>
            <InputComponent
              label={"지점명"}
              inputType={"text"}
            ></InputComponent>
            <InputComponent
              label={"연락처"}
              inputType={"text"}
            ></InputComponent>
            <InputComponent
              label={"아이디"}
              inputType={"text"}
            ></InputComponent>
            <InputComponent
              label={"비밀번호"}
              inputType={"password"}
            ></InputComponent>
          </CreateArea>
        </Wrapper>
      </Container>
    </>
  );
}
