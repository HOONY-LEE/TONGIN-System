import styled from "styled-components";
import * as S from "../styles/admin.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 82%;
  height: 60vh;
  outline: 1px dashed green;
`;

const Button = styled.button`
  width: 180px;
  height: 50px;
`;

export default function Admin() {
  return (
    <>
      <Container>
        <Wrapper>
          <h1>관리자페이지</h1>
          <Button>사원 추가하기</Button>
        </Wrapper>
      </Container>
    </>
  );
}
