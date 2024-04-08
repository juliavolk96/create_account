import React from "react";
import { ReactComponent as GooglePlaySvg } from './images/googlePlay.svg'

const GooglePlay: React.FC = () => {
  return (
    <button type="button" className="btn social"><GooglePlaySvg/></button>
  );
}

export default GooglePlay;