import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Tmp = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export default function Layout() {
  return (
    <>
      <Tmp>헤더 들어가야함</Tmp>
      <Outlet></Outlet>
    </>
  );
}
