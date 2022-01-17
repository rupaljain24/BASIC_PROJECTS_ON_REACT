import React, { useState } from "react";
import Alert from "./Alert";
import List from "./List";
import "./grocery.css";

function Grocery() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    showMsg: false,
    message: "",
    type: "", // green for suces & red for danger
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({
        showMsg: true,
        message: "Fields cannot be Empty!",
        type: "danger",
      });
    } else if (name && isEdit) { // to add the updated value to the list
      const editItem = list.map((item) => {
        if (item.id === editId) {
          return { ...list, name };
        }
        return item;
      });
      setList(editItem);
      setName("");
      setEditId(null);
      setIsEdit(false);

      setAlert({
        showMsg: true,
        message: " Item edited",
        type: "success",
      });
    } else {
      setList([...list, { name: name, id: Date.now() }]);
      setAlert({
        showMsg: true,
        message: "New Item Added",
        type: "success",
      });

      // const newItem= { item: item, id: Date.now() }
      // setItemList([...itemList, newItem ]);
      console.log(list);
    }

    setName("");
  };
  const handleRemoveAll = () => {
    setList([]);
  };

  const removeItem = (nameToRemoveId) => {
    const newList = list.filter((name) => {
      return name.id !== nameToRemoveId;
    });
    setList(newList);
    setAlert({
      showMsg: true,
      message: "Item Removed",
      type: "danger",
    });
    console.log("remove", nameToRemoveId);
  };
  const UpdateItem = (id) => {
    const itemToUpdate = list.find((item) => {
      return item.id === id;
    });
    setName(itemToUpdate.name);
    setEditId(id);
    setIsEdit(true);

    console.log("Updated");
  };
  return (
    <section className="section-center">
      <form className="grocery-form">
        {alert.showMsg && <Alert {...alert} />}
        <h3>Grocery</h3>
        <div className="form-control">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
            className="grocery"
          />
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            {isEdit ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List list={list} removeItem={removeItem} UpdateItem={UpdateItem} />
        {/* {list.length > 0 ? <List list={list} /> : <h6>List is empty</h6>} */}
        <button className="clear-btn" onClick={handleRemoveAll}>
          Remove All
        </button>
      </div>
    </section>
  );
}

export default Grocery;
