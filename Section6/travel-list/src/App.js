import React, { useState } from "react";
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
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleRemoveItem}
        onToggleItems={handleToggleItem}
      />
      <Stats />
    </div>
  );
}
function Logo() {
  return (
    <div className="Logo">
      <h1>Far Away</h1>
    </div>
  );
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("Ahehe");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description.trim()) return alert("Please enter an item.");
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((quantity) => (
          <option key={quantity} value={quantity}>
            {quantity}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add Item</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}, {item.quantity}{" "}
        {item.quantity > 1 ? "items" : "item"}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in your list, and you already packed Y of them.</em>
    </footer>
  );
}

export default App;
