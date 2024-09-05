// import { useState } from 'react';

import { useContext, useRef, useState } from 'react';
import { ItemsContext } from '../contexts/itemsContentProvider';

function AddItemForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const { handleAddItem } = useContext(ItemsContext);

  function onSubmit(e) {
    e.preventDefault();
    if (!value) {
      inputRef.current.focus();
      return;
    }

    handleAddItem(value);
    setValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />
      <button className="btn">Add to list</button>
    </form>
  );
}

export default AddItemForm;
