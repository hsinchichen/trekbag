import AddItmeForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

function SideBar({
  handleAddItem,
  handMarkAllAsComplete,
  handMarkAllAsIncomplete,
  handleResetToInitial,
  hadleRemoveAllItems,
}) {
  return (
    <div className="sidebar">
      <AddItmeForm onAddItem={handleAddItem} />
      <ButtonGroup
        handMarkAllAsComplete={handMarkAllAsComplete}
        handMarkAllAsIncomplete={handMarkAllAsIncomplete}
        handleResetToInitial={handleResetToInitial}
        hadleRemoveAllItems={hadleRemoveAllItems}
      />
    </div>
  );
}

export default SideBar;
