import React from "react";

function TaskCard(props) {
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement("h3", null, props.title),
    React.createElement("span", null, props.category)
  );
}

export default TaskCard;