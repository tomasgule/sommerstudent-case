import React from "react";
import { typeToColor } from "../constats";
import "./type.css";

type TypeProps = {
  type: string;
};

const Type = ({ type }: TypeProps) => {
  return (
    <div
      className="type-container"
      style={{ backgroundColor: typeToColor[type] }}
    >
      {type.toUpperCase()}
    </div>
  );
};

export default Type;
