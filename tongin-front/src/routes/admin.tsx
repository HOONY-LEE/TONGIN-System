import styled from "styled-components";
import AdminHeader from "../css/admin/admin";

// const Header = styled.div`
//   width: 400px;
//   height: 100px;
//   background-color: red;
// `;

export default function Admin() {
  return (
    <>
      <AdminHeader>헤더영역</AdminHeader>
      <h1>관리자페이지</h1>
    </>
  );
}
