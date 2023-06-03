import React from "react";

const Sidebar = ({ selectedPage, handleClick }) => {
  const stepTitles = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <>
      <div className="mobile-sidebar grid-flow">
        <div className="btn-group flexbox">
          {[1, 2, 3, 4].map((pageNum) => (
            <button
              key={pageNum}
              className={selectedPage === pageNum ? "btn active" : "btn"}
              onClick={() => handleClick(pageNum)}
            >
              {pageNum}
            </button>
          ))}
        </div>
      </div>

      <div className="desktop-sidebar grid-flow">
        <div className="btn-container grid-flow">
          {[1, 2, 3, 4].map((pageNum) => (
            <div key={pageNum} className="btn-group flexbox">
              <button
                className={selectedPage === pageNum ? "btn active" : "btn"}
                onClick={() => handleClick(pageNum)}
              >
                {pageNum}
              </button>

              <div className="container grid-flow" key={pageNum}>
                <p>Step {pageNum}</p>
                <h2>{stepTitles[pageNum - 1]}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
