export default function Item({ item, onDeleteItem, onToggleItems }) {
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