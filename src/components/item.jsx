import { useContext } from 'react';
import { ItemsContext } from '../contexts/itemsContentProvider';

function Item({ item }) {
  const { handleToggle, handleDelete } = useContext(ItemsContext);

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleToggle(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}

export default Item;
