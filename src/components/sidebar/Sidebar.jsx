import { FaSkyatlas } from "react-icons/fa6";
import { SidebarWrap } from "./Sidebar.styles";
import { Link } from "react-router-dom";
import {
  MdBarChart,
  MdClose,
  MdDashboard,
  MdHome,
  MdLock,
  MdPerson,
  MdShoppingCart,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarClose } from "../../slice/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  // Debugging: Check the state of isSidebarOpen
  console.log("Sidebar open state:", isSidebarOpen);

  return (
    <SidebarWrap className={`${isSidebarOpen ? "sidebar-active" : ""}`}>
      <div className="sidebar-content">
        <div className="sidebar-head">
          <span className="site-icon">
            <FaSkyatlas />
          </span>
          <h3 className="site-name">horizon</h3>
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={() => dispatch(setSidebarClose())}
          >
            <MdClose size={22} />
          </button>
        </div>
        <div className="sidebar-nav scrollbar">
          <ul className="sidenav-list">
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdHome size={24} />
                </span>
                <span className="link-text">Dashboard</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdShoppingCart size={20} />
                </span>
                <span className="link-text">NFT Marketplace</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdBarChart size={24} />
                </span>
                <span className="link-text">Table</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdDashboard size={20} />
                </span>
                <span className="link-text">Kanban</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdPerson size={22} />
                </span>
                <span className="link-text">Profile</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdLock size={20} />
                </span>
                <span className="link-text">Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;
