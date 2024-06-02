import { Checkbox } from "../checkbox";
import styles from "./TodoTask.module.scss";
import { TodoTaskProps } from "./TodoTask.types";

const TodoTask = ({ title, desc, isChecked, onClick }: TodoTaskProps) => {
  return (
    <div
      className={styles["todo-task"]}
      onClick={() => {
        onClick({ task: { title, desc, isChecked } });
      }}
    >
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
