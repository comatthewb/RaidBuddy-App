import React from "react";

const Bench = (props) => {
  if (props.state.benchRender) {
    return (
      <div>
        <h3> Bench</h3>
        {props.benchItem.map((item, index) => {
          return (
            <div key={index}>
              <li className="list-group-item">{item}</li>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Bench;
