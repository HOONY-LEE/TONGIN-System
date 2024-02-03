import { Outlet } from "react-router-dom";

export default function Layout() {
  const item = {
    item: "ddd",
    name: "ddd",
  };
  return (
    <>
      <h2>헤더 들어가야함</h2>
      <Outlet></Outlet>
    </>
  );
}
