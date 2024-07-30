import Summary from "../../components/pages/dashboard/Summary/Summary";
import TotalSpent from "../../components/pages/dashboard/TotalSpent/TotalSpent";
import { DashboardScreenWrap } from "./dashboardScreen.style";

const DashbordScreen = () => {
  return (
    <div>
      <DashboardScreenWrap>
        <Summary />
        <div className="dboard-blocks-row first-row">
          <TotalSpent />
        </div>
      </DashboardScreenWrap>
    </div>
  );
};

export default DashbordScreen;
