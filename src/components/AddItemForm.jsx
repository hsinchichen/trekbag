// import { useState } from 'react';

import { useRef, useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    if (!value) {
      inputRef.current.focus();
      return;
    }

    onAddItem(value);
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
