import CustomButton from "../components/common/customButton";
import InvoiceListComponent from "../components/home/invoiceListComponent";
import SearchComponent from "../components/home/searchComponent";
import TabComponent from "../components/home/tabComponent";

export default function Home() {
  const onClick = () => {
    alert("버튼을 클릭했습니다.");
  };

  return (
    <>
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
