import React from "react";

const RosterItem = (props) => {
  return props.rosterItem.map((item, index) => (
    <div key={index}>
      <li id={`bannerimage0`} className="list-group-item roster-name-size">
        <span
          className="glyphicon glyphicon-remove remove-from-roster"
          onClick={() => {
            props.deleteItem(index);
          }}
        ></span>
        {item}
      </li>
    </div>
  ));
};

export default RosterItem;
