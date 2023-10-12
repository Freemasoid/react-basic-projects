import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [users, setUsers] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{users.length} birthdays today</h3>
        <List users={users} />
        <button className="btn btn-block" type="button" onClick={() => setUsers([])}>
          clear all
        </button>
      </section>
    </main>
  );
}
export default App;
