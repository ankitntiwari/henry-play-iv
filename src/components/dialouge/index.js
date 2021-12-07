import React from "react";
import data from "../../data/henry_iv.json";
import "./index.css";

export const Dialouge = ({ item }) => {
  return (
    <div key={item.line_id} className="dialouge">
      {item.speaker !== data[item.line_id - 2].speaker ? (
        <h5>{`${item.speaker} : `}</h5>
      ) : null}

      <p>{item.text_entry}</p>
    </div>
  );
};
