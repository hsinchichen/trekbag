import ReactSelect from 'react-select';
import EmptyView from './EmptyView';
import { useContext, useMemo, useState } from 'react';
import Item from './item';
import { ItemsContext } from '../contexts/itemsContentProvider';

function ItemList() {
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
  const { items } = useContext(ItemsContext);

  const [sorting, setSorting] = useState(sortingOptions[0]);

  const sortedItems = useMemo(() => {
    const sorted = [...items];
    sorted.sort((a, b) => {
      if (sorting === 'packed') {
        return b.packed - a.packed;
      }
      if (sorting === 'unpacked') {
        return a.packed - b.packed;
      }
      return;
    });
    return sorted;
  }, [items, sorting]);

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
              <Item key={item.id} item={item} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ItemList;

/* <li>passport</li> */

/* <li>phone charger</li> */
