import { useContext } from 'react';
import { ItemsContext } from '../contexts/itemsContentProvider';

export function useItemsContexts() {
  const context = useContext(ItemsContext);

  return context;
}
