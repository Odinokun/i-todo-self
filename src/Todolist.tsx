import React, { KeyboardEvent, ChangeEvent, FC, useState } from 'react';
import { ITodoAll } from './models/types';

export const Todolist: FC<ITodoAll> = ({
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
}) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickHandler();
    }
  };

  const onClickHandler = () => {
    addTask(inputValue);
    setInputValue('');
  };

  const onAllClickHandler = () => changeFilter('all');
  const onActiveClickHandler = () => changeFilter('active');
  const onCompletedClickHandler = () => changeFilter('completed');

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          onChange={onChangeHandler}
          onKeyDown={onKeyPressHandler}
          value={inputValue}
        />
        <button onClick={onClickHandler}>+</button>
      </div>

      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>

      <ul>
        {tasks.map(task => {
          const onRemoveHandler = () => removeTask(task.id);
          return (
            <li key={task.id}>
              <button onClick={onRemoveHandler}>X</button>
              <input type='checkbox' checked={task.isDone} />{' '}
              <span>{task.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
