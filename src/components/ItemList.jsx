import ReactSelect from 'react-select';
import EmptyView from './EmptyView';
import { useState } from 'react';

function ItemList({ items, handleDelete, handleToggle }) {
  const sortingOptions = [
    {
      label: 'Sort by default',
      value: 'default',
    },
    {
      label: 'Sort by packed',
      value: 'packed',
    },
    {
      label: 'Sort by unpacked',
      value: 'unpacked',
    },
  ];

  const [sorting, setSorting] = useState(sortingOptions[0]);

  const sortedItems = [...items].sort((a, b) => {
    if (sorting === 'packed') {
      return b.packed - a.packed;
    }

    if (sorting === 'unpacked') {
      return a.packed - b.packed;
    }

    return;
  });

  console.log(items);

  return (
    <>
      {items.length === 0 ? (
        <EmptyView />
      ) : (
        <>
          <ul className="item-list">
            <section className="sorting">
              <ReactSelect
                defaultValue={sortingOptions[0]}
                options={sortingOptions}
                onChange={(e) => setSorting(e.value)}
              />
            </section>
            {sortedItems.map((item) => (
              <Item
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function Item({ item, onDelete, onToggle }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggle(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

export default ItemList;

/* <li>passport</li> */

/* <li>phone charger</li> */
