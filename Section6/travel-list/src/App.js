function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
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
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <h3>Packing List</h3>
    </div>
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
