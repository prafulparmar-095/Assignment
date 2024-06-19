import React from "react";
import ItemList from "./Itemlist";

function App() {
  const items = ['Use Array.map', 'Not a for loop', 'Give each item a unique key', 'Avoid using array as the key'];
  return (
    <div className="App">
       <h1>The "React Way" to Render a List</h1>
      <ItemList items={items} />
          </div>
  );
}

export default App;
