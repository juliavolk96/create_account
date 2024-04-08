import React from "react";
import Logo from "./Logo/Logo";
import Text from "./Text/Text";
import Form from "./Form/Form";
import LogIn from "./LogIn";
import GetApp from "./GetApp/GetApp";

const RightSide: React.FC = () => {
  return (
    <div className="right-section">
      <div className="right-section-container">
        <Logo />
        <Text />
        <Form />
        <LogIn/>
        <GetApp/>
      </div>
    </div>
  );
};

export default RightSide;
