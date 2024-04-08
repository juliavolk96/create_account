import React from "react";
import { ReactComponent as PhoneSvg } from './images/phones.svg';

const Phone: React.FC = () => {
  return (
    <div className="phone-svg">
      <PhoneSvg/>
    </div>
  );
}

export default Phone;