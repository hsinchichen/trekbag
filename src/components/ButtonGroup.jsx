import { useContext } from 'react';
import Button from './Button';
import { ItemsContext } from '../contexts/itemsContentProvider';

function ButtonGroup({}) {
  const {
    handMarkAllAsComplete,
    handMarkAllAsIncomplete,
    handleResetToInitial,
    hadleRemoveAllItems,
  } = useContext(ItemsContext);

  const secondaryButtons = [
    {
      text: 'Mark all as complete',
      onClick: handMarkAllAsComplete,
    },
    {
      text: 'Mark all as incomplete',
      onClick: handMarkAllAsIncomplete,
    },
    {
      text: 'Reset to initial',
      onClick: handleResetToInitial,
    },
    {
      text: 'Remove all items',
      onClick: hadleRemoveAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }, index) => (
        <Button onClick={onClick} type="secondary" key={index}>
          {text}
        </Button>
      ))}
    </section>
  );
}

export default ButtonGroup;
