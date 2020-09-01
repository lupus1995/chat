import React, { useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { setSearchInputUsers } from '../../../../redux/dialogs/actions';

let debounceTimeoutId: number = 0;

const SidebarSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = window.setTimeout(() => {
      setValue(e.target.value.substring(0, 255));
      // dispatch(setSearchInputUsers(e.target.value.substring(0, 255)));
    }, 100);
  };
  return (
    <div className="sidebarSearchContent">
      <input
        onInput={handleInput}
        placeholder="Поиск среди контактов"
        type="text"
        className="sidebarSearchInput"
      />
    </div>
  );
};

export default SidebarSearch;