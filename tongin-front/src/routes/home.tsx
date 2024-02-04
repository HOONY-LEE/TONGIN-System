import {
  FlexBox,
  FlexBoxRow,
  FlexX,
  FlexXY,
  FlexY,
} from "../components/home/common/flexBox";
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
    </>
  );
}
