import { useState } from "react";
import styles from "./App.module.scss";
import { AddTask, TodoList } from "./components";
import { TodoTask } from "./components/todo-task/TodoTask";

function App() {
  const [todoTasks, setTodoTasks] = useState([
    { title: "Do react course", desc: "Today!", isChecked: false },
    { title: "Go gym", desc: "Tommorow..", isChecked: true },
  ]);

  function handleTaskClick({
    task,
  }: {
    task: {
      title: string;
      desc: string;
      isChecked: boolean;
    };
  }) {
    setTodoTasks((tasks) => {
      const clickedTaskIndex = tasks.findIndex(
        (t) => t.title === task.title && t.desc === task.desc
      );

      if (clickedTaskIndex !== -1) {
        const updatedTask = {
          ...tasks[clickedTaskIndex],
          isChecked: !tasks[clickedTaskIndex].isChecked,
        };

        const newTasks = [...tasks];
        newTasks[clickedTaskIndex] = updatedTask;

        return newTasks;
      }

      return tasks;
    });
  }

  return (
    <main className={styles["app"]}>
      <AddTask setTodoTasks={setTodoTasks} />

      <TodoList>
        {todoTasks.map((task) => {
          return (
            <TodoTask
              key={task.title}
              title={task.title}
              desc={task.desc}
              isChecked={task.isChecked}
              onClick={handleTaskClick}
            />
          );
        })}
      </TodoList>
    </main>
  );
}

export { App };
