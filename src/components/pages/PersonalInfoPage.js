import React from "react";

const PersonalInfoPage = ({
  handleChange,
  name,
  email,
  phone,
  isNameValid,
  isEmailValid,
  isPhoneValid,
}) => {
  return (
    <div className="form-page personal-info-page grid-flow">
      <h1 className="title">Personal Info</h1>
      <p className="description">
        Please provide your name, email address, and phone number
      </p>
      <div className="input-group grid-flow">
        <div className="label-container flexbox">
          <label htmlFor="name">Name</label>
          {!isNameValid && <p className="error-msg">Invalid input</p>}
        </div>
        <input
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
          id="name"
          onChange={({ target }) => handleChange("name", target)}
          value={name}
          className={isNameValid ? "" : "error"}
        />
        <div className="label-container flexbox">
          <label htmlFor="email">Email Address</label>
          {!isEmailValid && <p className="error-msg">Invalid input</p>}
        </div>
        <input
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          onChange={({ target }) => handleChange("email", target)}
          value={email}
          className={isEmailValid ? "" : "error"}
        />
        <div className="label-container flexbox">
          <label htmlFor="phone">Phone Number</label>
          {!isPhoneValid && <p className="error-msg">Invalid input</p>}
        </div>
        <input
          type="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          id="phone"
          onChange={({ target }) => handleChange("phone", target)}
          value={phone}
          className={isPhoneValid ? "" : "error"}
        />
      </div>
    </div>
  );
};

export default PersonalInfoPage;
