import React from "react";
import iconSVG from "../../assets/images/icon-thank-you.svg";

const ThankYouPage = () => {
  return (
    <div className="thank-you-page grid-flow">
      <img src={iconSVG} alt="thank you icon" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have a fun using
        our platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYouPage;
