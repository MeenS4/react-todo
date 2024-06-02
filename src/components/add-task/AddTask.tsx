import { useState } from "react";
import { Button } from "../button";
import { Input } from "../input";
import styles from "./AddTask.module.scss";
import { AddTaskProps } from "./AddTask.types";

const AddTask = ({ setTodoTasks }: AddTaskProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  function handleAddTodoTask({
    newTask,
  }: {
    newTask: {
      title: string;
      desc: string;
    };
  }) {
    //Push new task to tasks state
    setTodoTasks((tasks: any) => [...tasks, newTask]);

    //Reset input values
    handleResetInput();
  }

  function handleResetInput() {
    setTaskTitle("");
    setTaskDesc("");
  }

  function handleDeleteAll() {
    handleResetInput();
    setTodoTasks([]);
  }

  //?Input change handling functions
  function handleTaskTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value);
  }

  function handleTaskDescChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskDesc(e.target.value);
  }

  return (
    <div className={styles["add-task"]}>
      <div className={styles["add-task__inputs"]}>
        <Input
          onChange={handleTaskTitleChange}
          value={taskTitle}
          label={"Title"}
        />

        <Input
          onChange={handleTaskDescChange}
          value={taskDesc}
          label={"Description"}
        />
      </div>

      <div className={styles["add-task__buttons"]}>
        <Button
          label="Add task"
          onClick={() => {
            handleAddTodoTask({
              newTask: { title: taskTitle, desc: taskDesc },
            });
          }}
        />

        <Button label="Reset inputs" onClick={handleResetInput} />

        <Button label="Delete all todos" onClick={handleDeleteAll} />
      </div>
    </div>
  );
};

export { AddTask };
