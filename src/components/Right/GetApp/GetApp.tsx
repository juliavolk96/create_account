import React from "react";
import AppStore from "./Buttons/AppStore";
import GooglePlay from "./Buttons/GooglePlay";

const GetApp: React.FC = () => {
  return (
    <div className="social-buttons">
      <GooglePlay/>
      <AppStore/>
    </div>
  );
}

export default GetApp;