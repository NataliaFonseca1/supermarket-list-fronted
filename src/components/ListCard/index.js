
import React from "react";
import "./index.css";

export const ListCard = ({ item, onCheck, onClick }) => {
  return (
    <div className="list-card-container">
      <div className="checkbox-container" onClick={() => onCheck(item)}>
        <img
          className="checkbox"
          src={`Imagens/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
          alt="checked item"
        />
      </div>

      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity}</span>
      </div>

      <div className="edit-icon-container" onClick={() => onClick(item)}>
      <img src="Imagens/arrow.svg" alt="arrow-icon" className="arrow-icon" />
      </div>
    </div>
  );
}