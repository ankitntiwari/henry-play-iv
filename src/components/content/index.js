import React from "react";
import { Act } from "../act";
import { Dialouge } from "../dialouge";
import { Entry } from "../entry/index";
import { Scene } from "../scene";
import "./index.css";

export const Content = ({ showLines }) => {
  return (
    <div className="content">
      {showLines.map((item, i, arr) => {
        if (item.text_entry.substring(0, 3) === "ACT") {
          return <Act item={item} />;
        } else if (item.text_entry.substring(0, 5) === "SCENE") {
          return <Scene item={item} />;
        } else if (
          item.text_entry.substring(0, 5) === "Enter" ||
          item.text_entry.substring(0, 8) === "Re-enter"
        ) {
          return <Entry item={item} />;
        } else {
          return <Dialouge item={item} />;
        }
      })}
    </div>
  );
};
