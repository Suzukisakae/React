import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Underwear", quantity: 12, packed: false },
  { id: 4, description: "T-Shirts", quantity: 5, packed: true },
];
function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItem(item) {
    setItems((prevItems) => [item, ...prevItems]);
  }
  function handleRemoveItem(idItemToRemove) {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== idItemToRemove)
    );
  }
  // Cập nhật trạng thái của item
  function handleToggleItem(idItemToToggle) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === idItemToToggle ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleRemoveAll() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirm) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleRemoveItem}
        onToggleItems={handleToggleItem}
        onDeleteAll={handleRemoveAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
