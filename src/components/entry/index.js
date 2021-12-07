import React from "react";
import "./index.css";

export const Entry = ({ item }) => {
  return (
    <h4 className="entry" key={item.line_id}>
      {item.text_entry}
    </h4>
  );
};
