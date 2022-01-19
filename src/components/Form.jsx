import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Form = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setList([...list, task]);
    setTask("");
  };

  const onDelete = (item) => {
    const filteredTodoList = list.filter((todoItem) => {
      return todoItem !== item;
    });

    setList(filteredTodoList);
  };

  return (
    <div className="form">
      <h1 className="title">Todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="what needs to be done?"
          value={task}
          onChange={handleChange}
        />
      </form>
      <ul>
        {list.map((item, index) => {
          return <TodoItem todoItem={item} deleteTodo={onDelete} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Form;
