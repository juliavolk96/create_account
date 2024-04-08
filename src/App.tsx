import React from 'react';
import LeftSide from './components/Left/LeftSide';
import RightSide from './components/Right/RightSide';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="page">
      <LeftSide/>
      <RightSide/>
    </div>
  );
}

export default App;