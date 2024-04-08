import React from "react";

const RememberMe: React.FC = () => {
  return (
    <div className="remember-me">
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  );
}

export default RememberMe;