import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  outline: 1px dashed red;
`;

export default function AdminLayout() {
  return (
    <>
      <Header>관리자페이지 헤더 영역</Header>
      <Outlet></Outlet>
    </>
  );
}
