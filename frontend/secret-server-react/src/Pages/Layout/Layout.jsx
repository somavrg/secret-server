import { Outlet, Link } from "react-router-dom";

import "./Layout.css";

const Layout = () => (
  <div className="Layout">
    
    <Outlet />
  </div>
);

export default Layout;
