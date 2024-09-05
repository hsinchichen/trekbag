import { createContext, useEffect, useState } from 'react';
import { initiaItems } from '../lib/constants';

export const ItemsContext = createContext();

console.log(ItemsContext);

function ItemsContentProvider({ children }) {
  // const itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem('items') || initiaItems),
  );

  function handleAddItem(newItem) {
    const newDate = {
      id: new Date().getTime(),
      name: newItem,
      packed: false,
    };

    const newItems = [...items, newDate];
    setItems(newItems);
  }

  function handleToggle(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });

    setItems(newItems);
  }

  function handleDelete(id) {
    const newItems = items.filter((item) => id !== item.id);

    setItems(newItems);
  }

  function handMarkAllAsComplete() {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  }

  function handMarkAllAsIncomplete() {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  }

  function handleResetToInitial() {
    setItems(initiaItems);
  }

  function hadleRemoveAllItems() {
    setItems([]);
  }

  const totalNumberOfItems = items.length;
  const numberOfItemsPacked = items.filter((item) => {
    if (item.packed === true) {
      return item;
    }
  }).length;

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleToggle,
        handleDelete,
        handMarkAllAsComplete,
        handMarkAllAsIncomplete,
        handleResetToInitial,
        hadleRemoveAllItems,
        totalNumberOfItems,
        numberOfItemsPacked,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsContentProvider;
