import {
  addItem,
  selectItem,
  removeItem,
} from "../../store/reducers/itemsReducer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem/ListItem";

function ListItems() {
  const [value, setValue] = useState("");
  const selectedItemId = useSelector((state) => state.items.selectedItemId);
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.items.itemsList);
  const [containerHeight, setContainerHeight] = useState(200);

  useEffect(() => {
    if (itemsList.length > 0) {
      dispatch(selectItem(itemsList[0].id));
    } else {
      dispatch(selectItem(null));
    }
    localStorage.setItem("itemsList", JSON.stringify(itemsList)); //this
  }, [dispatch, itemsList]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }
    dispatch(
      addItem({
        item: value,
      })
    );

    setContainerHeight(containerHeight + 60);
    setValue("");
  };

  const handleDeleteItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleItemSelect = (id) => {
    dispatch(selectItem(id)); //
  };

  return (
    <div className="el-1" style={{ height: `${containerHeight}px` }}>
      <h2>Items</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          name="itemName"
          placeholder="Type name here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button className="btn-items" type="submit">
          Add New
        </button>
        <ul>
          {itemsList.map((el) => (
            <li className="item" key={el.id}>
              <ListItem
                name={el.name}
                itemId={el.id}
                isSelected={selectedItemId === el.id}
                onSelect={() => handleItemSelect(el.id)}
                onDelete={() => handleDeleteItem(el.id)}
              />
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
export default ListItems;
