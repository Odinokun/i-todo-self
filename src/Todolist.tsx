import React, { KeyboardEvent, ChangeEvent, FC, useState } from 'react';
import { ITodoAll } from './models/types';

export const Todolist: FC<ITodoAll> = ({
  todoId,
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeStatus,
  removeTodo,
  filterVal,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === 'Enter') {
      onClickHandler();
    }
  };

  const onClickHandler = () => {
    if (inputValue.trim() === '') {
      setError('Title is required');
      return;
    }
    addTask(todoId, inputValue);
    setInputValue('');
  };

  const onAllClickHandler = () => changeFilter(todoId, 'all');
  const onActiveClickHandler = () => changeFilter(todoId, 'active');
  const onCompletedClickHandler = () => changeFilter(todoId, 'completed');

  const onRemoveTodoHandler = () => removeTodo(todoId);

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button onClick={onRemoveTodoHandler}>remove todo</button>
      </div>
      <br />

      <div>
        <input
          className={error ? 'error' : ''}
          onChange={onChangeHandler}
          onKeyDown={onKeyPressHandler}
          value={inputValue}
        />
        <button onClick={onClickHandler}>+</button>
        {error && <div className='error-message'>{error}</div>}
      </div>

      <div>
        <button
          className={filterVal === 'all' ? 'activeFilter' : ''}
          onClick={onAllClickHandler}
        >
          All
        </button>
        <button
          className={filterVal === 'active' ? 'activeFilter' : ''}
          onClick={onActiveClickHandler}
        >
          Active
        </button>
        <button
          className={filterVal === 'completed' ? 'activeFilter' : ''}
          onClick={onCompletedClickHandler}
        >
          Completed
        </button>
      </div>

      <ul>
        {tasks.map(task => {
          const onRemoveHandler = () => removeTask(todoId, task.id);

          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const newIsDoneValue = e.currentTarget.checked;
            changeStatus(todoId, task.id, newIsDoneValue);
          };

          return (
            <li key={task.id} className={task.isDone ? 'is-done' : ''}>
              <button onClick={onRemoveHandler}>X</button>
              <input
                type='checkbox'
                checked={task.isDone}
                onChange={onChangeHandler}
              />{' '}
              <span>{task.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
