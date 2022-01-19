import React from "react";

const TodoItem = (props) => {
  const handleDelete = () => {
    props.deleteTodo(props.todoItem);
  };

  return (
    <li>
      {props.todoItem}{" "}
      <button className="boton" onClick={handleDelete}>
        x
      </button>{" "}
    </li>
  );
};

export default TodoItem;
