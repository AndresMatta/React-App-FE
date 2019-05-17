import React from "react";

const ListGroup = ({ items, textProperty, selectedItem, onItemSelect }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            className={
              selectedItem === item
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </button>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name"
};

export default ListGroup;
