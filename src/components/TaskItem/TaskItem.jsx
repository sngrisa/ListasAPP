import React from 'react';
import "./TaskItem.scss";

const TaskItem = ({ onChange, data }) => {
  let { id, description, done } = data;
  return (
    <>
      <label className="todo new-item">
        <input
          className="todo__state"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="todo__text has-text-centered">{description}</div>
      </label>
    </>
  )
}

export default TaskItem;