import React, { ChangeEvent, FC } from 'react';
import { ITodoAll } from './models/types';
import { AddItemForm } from './components/AddItemFrom';
import { EditableSpan } from './components/EditableSpan';

export const Todolist: FC<ITodoAll> = ({
  todoId,
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeStatus,
  removeTodo,
  changeTodoTitle,
  changeTaskTitle,
  filterVal,
}) => {
  const onAllClickHandler = () => changeFilter(todoId, 'all');
  const onActiveClickHandler = () => changeFilter(todoId, 'active');
  const onCompletedClickHandler = () => changeFilter(todoId, 'completed');

  const onRemoveTodoHandler = () => removeTodo(todoId);
  const addItem = (title: string) => addTask(todoId, title);

  const onTodoTitleChangeHandler = (title: string) => {
    changeTodoTitle(todoId, title);
  };

  return (
    <div>
      <div>
        <EditableSpan title={title} onChange={onTodoTitleChangeHandler} />
        <br />
        <button onClick={onRemoveTodoHandler}>remove todo</button>
      </div>
      <br />
      <AddItemForm addItem={addItem} />

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

          const onTaskTitleChangeHandler = (title: string) => {
            changeTaskTitle(todoId, task.id, title);
          };

          return (
            <li key={task.id} className={task.isDone ? 'is-done' : ''}>
              <button onClick={onRemoveHandler}>X</button>
              <input
                type='checkbox'
                checked={task.isDone}
                onChange={onChangeHandler}
              />{' '}
              <EditableSpan
                title={task.title}
                onChange={onTaskTitleChangeHandler}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
