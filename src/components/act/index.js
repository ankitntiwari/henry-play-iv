import React from "react";
import "./index.css";

export const Act = ({ item }) => {
  return (
    <h2 className="act" key={item.line_id}>
      {item.text_entry}
    </h2>
  );
};
