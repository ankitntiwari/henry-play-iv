import React from "react";
import "./index.css";

export const Scene = ({ item }) => {
  return (
    <h3 className="scene" key={item.line_id}>
      {item.text_entry}
    </h3>
  );
};
