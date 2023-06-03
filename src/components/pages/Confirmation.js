import React from "react";

const Confirmation = ({
  billingType,
  selectedPlan,
  addOns,
  changePlan,
  data,
}) => {
  const calculateTotal = () => {
    let total = 0;
    if (selectedPlan) {
      const start = data[billingType].plans[selectedPlan].indexOf("$") + 1;
      const end = data[billingType].plans[selectedPlan].indexOf("/");
      total += parseInt(
        data[billingType].plans[selectedPlan].slice(start, end)
      );
    }
    addOns.forEach((addOn) => {
      const start = data[billingType].addOns[addOn].indexOf("$") + 1;
      const end = data[billingType].addOns[addOn].indexOf("/");
      total += parseInt(data[billingType].addOns[addOn].slice(start, end));
    });

    return total;
  };

  return (
    <div className="form-page confirmation-page grid-flow">
      <h1 className="title">Finishing up</h1>
      <p className="description">
        Double-check everything looks OK before confirming.
      </p>

      <div className="selections-container flexbox">
        <div className="selection flexbox">
          <div className="container">
            <h2 className="selection-title">
              {selectedPlan} ({billingType})
            </h2>
            <button className="btn change-selection-link" onClick={changePlan}>
              Change
            </button>
          </div>
          <p className="selection-pricing">
            {data[billingType].plans[selectedPlan]}
          </p>
        </div>

        {addOns.map((addOn) => (
          <div className="selection flexbox" key={addOn}>
            <h2 className="selection-title">{addOn}</h2>
            <p className="selection-pricing">
              {data[billingType].addOns[addOn]}
            </p>
          </div>
        ))}
      </div>

      <div className="selection-total flexbox">
        <h2>Total (per {billingType.slice(0, billingType.length - 2)})</h2>
        <p>
          +${calculateTotal()} {billingType === "monthly" ? "/mo" : "/yr"}
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
