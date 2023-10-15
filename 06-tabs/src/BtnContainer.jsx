import React from "react";

function BtnContainer({ jobs, currItem, setCurrItem }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            className={index === currItem ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrItem(index)}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
