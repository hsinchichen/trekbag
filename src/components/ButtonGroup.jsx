import Button from './Button';

function ButtonGroup({
  handMarkAllAsComplete,
  handMarkAllAsIncomplete,
  handleResetToInitial,
  hadleRemoveAllItems,
}) {
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
