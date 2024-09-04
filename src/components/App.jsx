import { useState } from 'react';
import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import SideBar from './SideBar';
import { initiaItems } from '../lib/constants';

function App() {
  const [items, setItems] = useState(initiaItems);

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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalNumberOfItems={totalNumberOfItems}
          numberOfItemsPacked={numberOfItemsPacked}
        />
        <ItemList
          items={items}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <SideBar
          handleAddItem={handleAddItem}
          handMarkAllAsComplete={handMarkAllAsComplete}
          handMarkAllAsIncomplete={handMarkAllAsIncomplete}
          handleResetToInitial={handleResetToInitial}
          hadleRemoveAllItems={hadleRemoveAllItems}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
