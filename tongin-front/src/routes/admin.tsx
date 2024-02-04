import styled from "styled-components";
import CustomButton from "../components/common/customButton";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "../components/common/flexWrapper";

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30%;
  margin-top: 20vh;
`;

export default function Admin() {
  const navigate = useNavigate();

  const moveToCreate = () => {
    navigate("/admin/create-account");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <BtnBox>
            <CustomButton
              text={"사원 관리"}
              onClick={moveToCreate}
            ></CustomButton>
            <CustomButton text={"관리자 메뉴1"}></CustomButton>
            <CustomButton text={"관리자 메뉴2"}></CustomButton>
          </BtnBox>
        </Wrapper>
      </Container>
    </>
  );
}
