import Sidebar from "../sidebar/Sidebar";
import { BaseLayoutWrap } from "./BaseLayout.styles";
const BaseLayout = () => {
  return (
    <BaseLayoutWrap>
      <Sidebar />
      <div className="main-content-wrapper"></div>
    </BaseLayoutWrap>
  );
};

export default BaseLayout;
