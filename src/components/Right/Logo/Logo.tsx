import React from "react";
import logoImage from "./images/logo.png";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="Logo" />
      <p>Logo</p>
    </div>
  );
}

export default Logo;