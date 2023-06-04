import React, { KeyboardEvent, ChangeEvent, FC, useState } from 'react';
import { IAddItemForm } from '../models/types';

export const AddItemForm: FC<IAddItemForm> = ({ addItem }) => {
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
    addItem(inputValue);
    setInputValue('');
  };

  return (
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
  );
};
