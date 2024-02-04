import styled from "styled-components";

const InputArea = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 70px;
  outline: 1px dashed black;
`;

const Label = styled.div`
  width: 100%;
  height: 10px;
`;

const InputBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 8px;
  outline: 1px solid gray;
`;

const InputText: any = styled.input.attrs({
  type: "text",
})`
  width: 94%;
  height: 30px;
  font-size: 20px;
  outline: none;
  border: none;
`;

const InputPassword: any = styled.input.attrs({
  type: "password",
})`
  width: 94%;
  height: 30px;
  font-size: 20px;
  outline: none;
  border: none;
`;

export const InputComponent = (props: any) => {
  const { label, inputType } = props;

  return (
    <>
      <InputArea>
        <Label>{label}</Label>
        <InputBox>
          {inputType === "text" ? (
            <InputText></InputText>
          ) : (
            <InputPassword></InputPassword>
          )}
        </InputBox>
      </InputArea>
    </>
  );
};
