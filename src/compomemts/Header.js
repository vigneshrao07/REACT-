import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
const Header = () => {
  const [btnnameReact, setbtnnameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnnameReact === "Login"
                ? setbtnnameReact("logout")
                : setbtnnameReact("Login");
            }}
          >
            {btnnameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
