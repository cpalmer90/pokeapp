import React from "react";
import Logo from "../gotta-catch-em-all-transparent-pokemon-logo-11.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Pokemon Gotta Catch Them All" />
    </div>
  );
};

export default Header;
