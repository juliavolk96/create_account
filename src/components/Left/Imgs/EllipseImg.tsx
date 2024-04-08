import React from "react";
import { ReactComponent as CircleSvg } from './images/circle.svg';

const EllipseImg: React.FC = () => {
  return (
    <div className="ellipse">
      <CircleSvg/>
    </div>
  );
}

export default EllipseImg;