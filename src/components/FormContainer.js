import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Form from "./Form";
import ThankYouPage from "./pages/ThankYouPage";

const FormContainer = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    if (!email) return false;
    if (!email.includes("@")) return false;

    let arr = email.split("@");
    if (arr[0].length < 1 || arr[1].length < 1) return false;
    if (!arr[1].includes(".")) return false;
    arr = arr[1].split(".");
    if (arr[0].length < 1 || arr[1].length < 1) return false;

    return true;
  };

  const validateInputs = () => {
    if (name === "") {
      setIsNameValid(false);
      return false;
    }
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return false;
    }
    if (phone === "") {
      setIsPhoneValid(false);
      return false;
    }

    return true;
  };

  const handleChange = (inputType, target) => {
    switch (inputType) {
      case "name":
        setName(target.value);
        setIsNameValid(true);
        break;
      case "email":
        setEmail(target.value);
        setIsEmailValid(true);
        break;
      case "phone":
        setPhone(target.value);
        setIsPhoneValid(true);
        break;
      default:
        break;
    }
  };

  const goBack = (e) => {
    e.preventDefault();
    setSelectedPage((prevPage) => prevPage - 1);
  };
  const goNext = (e) => {
    e.preventDefault();

    if (validateInputs()) setSelectedPage((prevPage) => prevPage + 1);
  };

  const changePlan = (e) => {
    e.preventDefault();
    setSelectedPage(2);
  };

  return (
    <div className="form-container grid-flow">
      <Sidebar
        selectedPage={selectedPage}
        handleClick={(pageNum) => {
          if (validateInputs()) setSelectedPage(pageNum);
        }}
      />

      {isSubmitted ? (
        <ThankYouPage />
      ) : (
        <Form
          selectedPage={selectedPage}
          goBack={goBack}
          goNext={goNext}
          changePlan={changePlan}
          name={name}
          email={email}
          phone={phone}
          handleChange={handleChange}
          isNameValid={isNameValid}
          isEmailValid={isEmailValid}
          isPhoneValid={isPhoneValid}
          sumbitForm={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
          }}
        />
      )}
    </div>
  );
};

export default FormContainer;
