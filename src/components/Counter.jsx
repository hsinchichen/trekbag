import { useItemsContexts } from '../Hooks/useItemsContexts';

function Counter() {
  const { totalNumberOfItems, numberOfItemsPacked } = useItemsContexts();

  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} itmes packed
    </p>
  );
}

export default Counter;
  