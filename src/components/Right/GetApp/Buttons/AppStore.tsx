import React from "react";
import { ReactComponent as AppStoreSvg } from './images/appStore.svg'

const AppStore: React.FC = () => {
  return (
    <button type="button" className="btn social"><AppStoreSvg/></button>
  );
}

export default AppStore;