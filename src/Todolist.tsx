import React, { FC } from 'react';
import { ITodoAll } from './models/types';

export const Todolist: FC<ITodoAll> = ({ title, tasks, removeTask, changeFilter }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>

      <div>
        <button onClick={() => changeFilter('all')}>All</button>
        <button onClick={() => changeFilter('active')}>Active</button>
        <button onClick={() => changeFilter('completed')}>Completed</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <button onClick={() => removeTask(task.id)}>X</button>
            <input type='checkbox' checked={task.isDone} /> <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
