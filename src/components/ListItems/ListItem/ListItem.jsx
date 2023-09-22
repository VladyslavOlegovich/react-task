import PropTypes from "prop-types";
import "./ListItem.css";
import { useSelector } from "react-redux";

function ListItem({ name, itemId, onDelete, isSelected, onSelect }) {
  const commentCount = useSelector((state) => {
    const item = state.items.itemsList.find((item) => item.id === itemId);
    return item?.comments?.length || 0;
  });
  const handleDeleteClick = () => {
    onDelete();
  };

  const handleItemSelect = () => {
    onSelect();
  };

  const itemClasses = `listItem ${isSelected ? "selected" : ""}`;

  return (
    <div className={itemClasses} onClick={handleItemSelect}>
      <p className="itemName">{name}</p>
      <span className="commentCount">{commentCount}</span>
      <button className="deleteButton" onClick={() => handleDeleteClick()}>
        Delete
      </button>
    </div>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  itemId: PropTypes.any,
  onDelete: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ListItem;
