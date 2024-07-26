import { Outlet } from "react-router-dom";
import AppBar from "../appBar/AppBar";
import Sidebar from "../sidebar/Sidebar";
import { BaseLayoutWrap } from "./BaseLayout.styles";
const BaseLayout = () => {
  return (
    <BaseLayoutWrap>
      <Sidebar />
      <div className="main-content-wrapper">
        <AppBar />
        <Outlet />
      </div>
    </BaseLayoutWrap>
  );
};

export default BaseLayout;
