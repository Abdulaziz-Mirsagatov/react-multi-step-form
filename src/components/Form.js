import React, { useState } from "react";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import SelectPlan from "./pages/SelectPlan";
import PickAddOn from "./pages/PickAddOn";
import Confirmation from "./pages/Confirmation";

const data = {
  monthly: {
    plans: {
      arcade: "$9/mo",
      advanced: "$12/mo",
      pro: "$15/mo",
    },
    addOns: {
      "Online service": "+$1/mo",
      "Larger storage": "+$2/mo",
      "Customizable profile": "+$2/mo",
    },
  },
  yearly: {
    plans: {
      arcade: "$90/yr",
      advanced: "$120/yr",
      pro: "$150/yr",
    },
    addOns: {
      "Online service": "+$10/yr",
      "Larger storage": "+$20/yr",
      "Customizable profile": "+$20/yr",
    },
  },
};

const Form = ({
  selectedPage,
  goBack,
  goNext,
  changePlan,
  name,
  email,
  phone,
  handleChange,
  isNameValid,
  isEmailValid,
  isPhoneValid,
  sumbitForm,
}) => {
  const [billingType, setbillingType] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [addOns, setAddOns] = useState([]);

  const handleAddOn = (addOn) => {
    let arr = [...addOns];
    if (arr.includes(addOn)) {
      const i = arr.indexOf(addOn);
      arr.splice(i, 1);
    } else arr.push(addOn);
    setAddOns(arr);
  };

  let formPage;
  switch (selectedPage) {
    case 1:
      formPage = (
        <PersonalInfoPage
          handleChange={handleChange}
          name={name}
          email={email}
          phone={phone}
          isNameValid={isNameValid}
          isEmailValid={isEmailValid}
          isPhoneValid={isPhoneValid}
        />
      );
      break;
    case 2:
      formPage = (
        <SelectPlan
          billingType={billingType}
          togglebillingType={() =>
            setbillingType((prevbillingType) =>
              prevbillingType === "monthly" ? "yearly" : "monthly"
            )
          }
          selectedPlan={selectedPlan}
          handleClick={(id) => setSelectedPlan(id)}
          data={data}
        />
      );
      break;
    case 3:
      formPage = (
        <PickAddOn
          addOns={addOns}
          handleClick={handleAddOn}
          billingType={billingType}
          data={data}
        />
      );
      break;
    case 4:
      formPage = (
        <Confirmation
          billingType={billingType}
          selectedPlan={selectedPlan}
          addOns={addOns}
          changePlan={changePlan}
          data={data}
        />
      );
      break;
    default:
      formPage = (
        <PersonalInfoPage
          handleChange={handleChange}
          name={name}
          email={email}
          phone={phone}
          isNameValid={isNameValid}
          isEmailValid={isEmailValid}
          isPhoneValid={isPhoneValid}
        />
      );
      break;
  }

  return (
    <form className="form grid-flow">
      {formPage}

      <div className="page-navigation flexbox">
        {selectedPage !== 1 && (
          <button className="btn back-btn" onClick={goBack}>
            Go Back
          </button>
        )}
        {selectedPage !== 4 ? (
          <button className="btn next-btn" onClick={goNext}>
            Next Step
          </button>
        ) : (
          <button className="btn confirm-btn" onClick={sumbitForm}>
            Confirm
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
