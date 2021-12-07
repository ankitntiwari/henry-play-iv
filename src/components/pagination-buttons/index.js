import React from "react";
import "./index.css";

export const Pagination = ({ handlePrevious, handleNext }) => {
  return (
    <div className="pagination">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
