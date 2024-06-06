import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import ToDoitem1 from "./Components/ToDoitem1";
import Todoitem2 from "./Components/Todoitem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class="item-container">
         <ToDoitem1 />
         <Todoitem2 />

      </div>
     
    </center>
  );
}

export default App;
