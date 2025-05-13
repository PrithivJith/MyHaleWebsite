import { Link } from "react-router-dom";
import HomeLogo from "./assets/home.svg";
import InfoLogo from "./assets/info.svg";
import ResponseLogo from "./assets/response.svg";
import aHomeLogo from "./assets/home - Copy.svg";
import aInfoLogo from "./assets/info - Copy.svg";
import aResponseLogo from "./assets/response - Copy.svg";

import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="nav-component">
      <nav>
        <Link to="/MyHaleWebsite/">
          <img
            className="icon"
            src={(location.pathname === "/MyHaleWebsite/" ? aHomeLogo : HomeLogo)}
          />
        </Link>

        <Link to="/MyHaleWebsite/info">
          <img
            className="icon"
            src={(location.pathname === "/MyHaleWebsite/info" ? aInfoLogo : InfoLogo)}
          />
        </Link>

        <Link to="/MyHaleWebsite/response">
          <img
            className="icon"
            src={
              (location.pathname === "/MyHaleWebsite/response" ? aResponseLogo : ResponseLogo)
            }
          />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
