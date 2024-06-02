import { useState } from "react";
import styles from "./App.module.scss";
import { AddTask, TodoList } from "./components";
import { TodoTask } from "./components/todo-task/TodoTask";

function App() {
  const [todoTasks, setTodoTasks] = useState([
    { title: "Do react course", desc: "Today!", isChecked: false },
    { title: "Go gym", desc: "Tommorow..", isChecked: true },
  ]);

  return (
    <main className={styles["app"]}>
      <AddTask setTodoTasks={setTodoTasks} />

      <TodoList>
        {todoTasks.map((task) => {
          return <TodoTask title={task.title} desc={task.desc} />;
        })}
      </TodoList>
    </main>
  );
}

export { App };
