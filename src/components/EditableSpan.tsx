import React, { ChangeEvent, FC, useState } from 'react';
import { IEditableSpan } from '../models/types';

export const EditableSpan: FC<IEditableSpan> = ({ title, onChange }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(title);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onEditMode = () => setEditMode(true);
  const offEditMode = () => {
    setEditMode(false);
    onChange(inputValue);
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      offEditMode();
    }
  };

  return (
    <>
      {editMode ? (
        <input
          value={inputValue}
          onBlur={offEditMode}
          onChange={onChangeHandler}
          onKeyDown={onKeyPressHandler}
          autoFocus
        />
      ) : (
        <span onDoubleClick={onEditMode}>{title}</span>
      )}
    </>
  );
};
