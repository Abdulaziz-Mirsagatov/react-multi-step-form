import React from "react";
import arcadeSVG from "../../assets/images/icon-arcade.svg";
import advancedSVG from "../../assets/images/icon-advanced.svg";
import proSVG from "../../assets/images/icon-pro.svg";

const SelectPlan = ({
  billingType,
  togglebillingType,
  selectedPlan,
  handleClick,
  data,
}) => {
  return (
    <div className="form-page select-plan-page grid-flow">
      <h1 className="title">Select your plan</h1>
      <p className="description">
        You have the option of monthly or yearly billing.
      </p>

      <div className="input-group flexbox">
        <div
          id="arcade"
          className={
            selectedPlan === "arcade"
              ? "plan-container active flexbox"
              : "plan-container flexbox"
          }
          onClick={() => handleClick("arcade")}
        >
          <img src={arcadeSVG} alt="plan icon" />
          <div className="container">
            <h2 className="plan-title">Arcade</h2>
            <p className="plan-pricing">{data[billingType].plans.arcade}</p>
            {billingType === "yearly" && (
              <p className="yearly-plan-benefit">2 months free</p>
            )}
          </div>
        </div>

        <div
          id="advanced"
          className={
            selectedPlan === "advanced"
              ? "plan-container active flexbox"
              : "plan-container flexbox"
          }
          onClick={() => handleClick("advanced")}
        >
          <img src={advancedSVG} alt="plan icon" />
          <div className="container">
            <h2 className="plan-title">Advanced</h2>
            <p className="plan-pricing">{data[billingType].plans.advanced}</p>
            {billingType === "yearly" && (
              <p className="yearly-plan-benefit">2 months free</p>
            )}
          </div>
        </div>

        <div
          id="pro"
          className={
            selectedPlan === "pro"
              ? "plan-container active flexbox"
              : "plan-container flexbox"
          }
          onClick={() => handleClick("pro")}
        >
          <img src={proSVG} alt="plan icon" />
          <div className="container">
            <h2 className="plan-title">Pro</h2>
            <p className="plan-pricing">{data[billingType].plans.pro}</p>
            {billingType === "yearly" && (
              <p className="yearly-plan-benefit">2 months free</p>
            )}
          </div>
        </div>
      </div>

      <div className="toggle-container flexbox">
        <h3
          className={
            billingType === "monthly"
              ? "plan-type-title active"
              : "plan-type-title"
          }
        >
          Monthly
        </h3>
        <div
          className={
            billingType === "monthly"
              ? "toggle left flexbox"
              : "toggle right flexbox"
          }
          onClick={togglebillingType}
        >
          <div className="ball"></div>
        </div>
        <h3
          className={
            billingType === "yearly"
              ? "plan-type-title active"
              : "plan-type-title"
          }
        >
          Yearly
        </h3>
      </div>
    </div>
  );
};

export default SelectPlan;
