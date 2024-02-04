
import {
  FlexBox,
  FlexBoxRow,
  FlexX,
  FlexXY,
  FlexY,
} from "../components/home/common/flexBox";
import CustomButton from "../components/common/customButton";
import InvoiceListComponent from "../components/home/invoiceListComponent";
import SearchComponent from "../components/home/searchComponent";
import TabComponent from "../components/home/tabComponent";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  outline: 2px solid red;
`;
const SearchContainer = styled.div`
  width: 100%;
  height: 20px;
  outline: 2px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TabContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InvoiceContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  outline: 2px solid red;
`;

export default function Home() {
  const onClick = () => {
    alert("버튼을 클릭했습니다.");
  };

  return (
    <>
      <FlexXY>
        <HomeContainer>
          <SearchContainer>
            <SearchComponent></SearchComponent>
          </SearchContainer>
          <TabContainer>
            <TabComponent></TabComponent>
            <TabComponent></TabComponent>
            <TabComponent></TabComponent>
          </TabContainer>
          <InvoiceContainer>
            <InvoiceListComponent></InvoiceListComponent>
          </InvoiceContainer>
        </HomeContainer>
      </FlexXY>
      <h1>홈 화면</h1>
      <SearchComponent></SearchComponent>
      <TabComponent></TabComponent>
      <InvoiceListComponent></InvoiceListComponent>
      <CustomButton
        onClick={onClick}
        width={"700px"}
        height={"50px"}
        text={`로그인`}
        $bgColor={`#0C8CE9`}
        color={`white`}
        radius={"8px"}
        size={"30px"}
        fontWeight={"800"}
        $outline={"4px dashed gray"}
        $hoverBgColor={"green"}
        $hoverColor={"black"}
        cursor={"none"}
      ></CustomButton>
      <CustomButton fontWeight={"100"}></CustomButton>
    </>
  );
}
