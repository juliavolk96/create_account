import React from "react";
import EllipseImg from "./Imgs/EllipseImg";
import { ReactComponent as PhoneSvg } from './Imgs/images/phones.svg';

const LeftSide: React.FC = () => {
  return (
    <div className="left-section">
      <div className="left-section-container">
        <h1 className="left-title">
          Social media shared today, tomorrow<br/> or by location
        </h1>
        <div className="ellipse-container">
          <EllipseImg/>
          <div className="phone">
            <PhoneSvg/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;