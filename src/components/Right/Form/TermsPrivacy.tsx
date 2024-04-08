import React from "react";

const TermsPrivacy: React.FC = () => {
  return (
    <div className="terms-privacy">
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">I agree to all the Terms and Privacy policy</label>
    </div>
  );
}

export default TermsPrivacy;