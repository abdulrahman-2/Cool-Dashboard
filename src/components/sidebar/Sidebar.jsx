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

const Sidebar = () => {
  return (
    <SidebarWrap className={`sidebar-active`}>
      <div className="sidebar-content">
        <div className="sidebar-head">
          <span className="site-icon">
            <FaSkyatlas />
          </span>
          <h3 className="site-name">horizon</h3>
          <button type="button" className="sidebar-close-btn">
            <MdClose size={20} />
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
                <span className="link-title">NFT Marketplace</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdBarChart size={24} />
                </span>
                <span className="link-title">Table</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdDashboard size={20} />
                </span>
                <span className="link-title">Kanban</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdPerson size={22} />
                </span>
                <span className="link-title">Profile</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link">
                <span className="link-icon">
                  <MdLock size={20} />
                </span>
                <span className="link-title">Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;
