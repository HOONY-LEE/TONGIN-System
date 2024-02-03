import InvoiceListComponent from "../components/home/invoiceListComponent";
import SearchComponent from "../components/home/searchComponent";
import TabComponent from "../components/home/tabComponent";

export default function Home() {
  return (
    <>
      <h1>홈 화면</h1>
      <SearchComponent></SearchComponent>
      <TabComponent></TabComponent>
      <InvoiceListComponent></InvoiceListComponent>
    </>
  );
}
