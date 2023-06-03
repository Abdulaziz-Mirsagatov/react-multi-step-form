import React from "react";

const PickAddOn = ({ addOns, handleClick, billingType, data }) => {
  return (
    <div className="form-page pick-add-on-page grid-flow">
      <h1 className="title">Pick add-ons</h1>
      <p className="description">Add-ons help enhance your game experience.</p>

      <div className="input-group flexbox">
        <div
          className={
            addOns.includes("Online service")
              ? "add-on-container active flexbox"
              : "add-on-container flexbox"
          }
          onClick={() => handleClick("Online service")}
        >
          <input
            type="checkbox"
            name="online-service"
            id="online-service"
            checked={addOns.includes("Online service")}
            readOnly
          />
          <div className="container">
            <h2 className="add-on-title">Online service</h2>
            <p className="add-on-description">Access to multiplayer games</p>
          </div>
          <p className="add-on-pricing">
            {data[billingType].addOns["Online service"]}
          </p>
        </div>

        <div
          className={
            addOns.includes("Larger storage")
              ? "add-on-container active flexbox"
              : "add-on-container flexbox"
          }
          onClick={() => handleClick("Larger storage")}
        >
          <input
            type="checkbox"
            name="larger-storage"
            id="larger-storage"
            checked={addOns.includes("Larger storage")}
            readOnly
          />
          <div className="container">
            <h2 className="add-on-title">Larger storage</h2>
            <p className="add-on-description">Extra 1TB of cloud save</p>
          </div>
          <p className="add-on-pricing">
            {data[billingType].addOns["Larger storage"]}
          </p>
        </div>

        <div
          className={
            addOns.includes("Customizable profile")
              ? "add-on-container active flexbox"
              : "add-on-container flexbox"
          }
          onClick={() => handleClick("Customizable profile")}
        >
          <input
            type="checkbox"
            name="customizable-profile"
            id="customizable-profile"
            checked={addOns.includes("Customizable profile")}
            readOnly
          />
          <div className="container">
            <h2 className="add-on-title">Customizable profile</h2>
            <p className="add-on-description">Custom theme on your profile</p>
          </div>
          <p className="add-on-pricing">
            {data[billingType].addOns["Customizable profile"]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PickAddOn;
