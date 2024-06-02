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
    const { title, desc } = newTask;

    //Validate user input
    if (!title || !desc) {
      return;
    }

    //Push new task to tasks state
    setTodoTasks((tasks: any) => [...tasks, newTask]);

    //Reset input values
    handleResetInput();
  }

  //Reset input values
  function handleResetInput() {
    if (taskTitle || taskDesc) {
      setTaskTitle("");
      setTaskDesc("");
    }
  }

  //Delete checked todo tasks
  function handleDeleteCheckedTasks() {
    handleResetInput();

    setTodoTasks((tasks) => {
      return tasks.filter((task) => !task.isChecked);
    });
  }

  //Input change handling functions
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

        <Button label="Delete done tasks" onClick={handleDeleteCheckedTasks} />
      </div>
    </div>
  );
};

export { AddTask };
