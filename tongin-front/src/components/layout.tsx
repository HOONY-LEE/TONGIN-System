import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h2>헤더 들어가야함</h2>
      <Outlet></Outlet>
    </>
  );
}
