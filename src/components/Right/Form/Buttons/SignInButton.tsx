import React from "react";
import { ReactComponent as GoogleSvg } from './images/GoogleImg.svg';

const SignInButton: React.FC = () => {
  return (
    <button type="button" className="btn sign-btn">
      <GoogleSvg className="google-svg"/>
      Sign-in with Google
    </button>
  );
}

export default SignInButton;