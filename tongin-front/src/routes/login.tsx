import { useState } from "react";
import styled from "styled-components";
import TabComponent from "../components/home/tabComponent";

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ContainerSub = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  outline: 1px solid red;
`;

const LoginLogo = styled.div`
  width: 20%;
  height: 20%;
  outline: 2px solid red;
`;
const OutlineInputbox = styled.div`
  width: 100%;
  height: 14%;
  outline: 1px solid green;
`;

const Inputbox = styled.input`
  width: 100%;
  height: 100%;
`;

const CheckContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  outline: 1px dashed blue;
`;
const CheckBox = styled.input`
  width: 10%;
  height: 100%;
  outline: 1px solid red;
`;
const CheckText = styled.div`
  font-size: 20px;
`;
const LoginBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 20px;
`;
const MemoryLogin = styled.div`
  width: 100%;
  height: 10%;
  font-size: 20px;
  text-decoration: underline;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  const onLogin = () => {
    alert("로그인 성공");
  };

  return (
    <>
      <ContainerLogin>
        <ContainerSub>
          <LoginLogo>logo</LoginLogo>
          <OutlineInputbox>
            <Inputbox placeholder="아이디를 입력해 주세요"></Inputbox>
          </OutlineInputbox>
          <OutlineInputbox>
            <Inputbox placeholder="비밀번호를 입력해 주세요"></Inputbox>
          </OutlineInputbox>
          <CheckContainer>
            <CheckBox type="checkbox"></CheckBox>
            <CheckText>아이디/비밀번호 기억하기</CheckText>
          </CheckContainer>
          <LoginBtn onClick={onLogin}>login</LoginBtn>

          <MemoryLogin> 아이디/비밀번호 찾기</MemoryLogin>
        </ContainerSub>
      </ContainerLogin>
    </>
  );
}
