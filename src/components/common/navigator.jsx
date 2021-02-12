import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./css/navigator.css";

function Navigator({ type, onPress, disabled }) {
  const size = 50;
  const val = disabled === type ? "Navigator disabled" : "Navigator";
  return (
    <div className={val}>
      <div onClick={() => onPress(type)}>
        {type === "right" ? (
          <FaChevronRight size={size} />
        ) : (
          <FaChevronLeft size={size} />
        )}
      </div>
    </div>
  );
}

export default Navigator;
