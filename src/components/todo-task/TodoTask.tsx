import { useState } from "react";
import { Checkbox } from "../checkbox";
import styles from "./TodoTask.module.scss";
import { TodoTaskColorsEnum } from "./TodoTask.types";

const TodoTask = ({
  title,
  desc,
  color,
}: {
  title: string;
  desc: string;

  color?: TodoTaskColorsEnum;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxToggle() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles["todo-task"]} onClick={handleCheckboxToggle}>
      <p
        className={`${styles["todo-task__title"]} ${isChecked ? styles["todo-task__title--checked"] : null}`}
      >
        {title}
      </p>

      <p className={styles["todo-task__desc"]}>{desc}</p>

      <Checkbox
        className={styles["todo-task__checkbox"]}
        isChecked={isChecked}
      />
    </div>
  );
};

export { TodoTask };
