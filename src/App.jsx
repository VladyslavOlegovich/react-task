import "./App.css";
import ListComments from "./components/ListComments/ListComments";
import ListItems from "./components/ListItems/ListItems";
import "./components/ListItems/ListItems.css";
import "./components/ListComments/ListComments.css";

function App() {
  return (
    <div className="react-app container-fluid">
      <div className="row">
        <aside className="aside">
          <h2>DAYRY APP</h2>
          <div>Comment with no sense</div>
        </aside>
        <main className="main-container">
          <ListItems />
          <ListComments />
        </main>
      </div>
    </div>
  );
}

export default App;
