export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p className="footer">
          <em>No items in the list</em>
        </p>
      </footer>
    );

  const totalItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((totalPackedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {totalPackedItems === totalItems
          ? "All items are packed. Already to go ✈️"
          : `You have ${totalItems} items in your list, and you already packed ${totalPackedItems} (${percentPacked}% of them).`}
      </em>
    </footer>
  );
}
