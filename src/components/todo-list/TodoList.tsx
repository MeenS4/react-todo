import { ReactNode } from "react";
import styles from "./TodoList.module.scss";

const TodoList = ({ children }: { children: ReactNode }) => {
  return <section className={styles["todo-list"]}>{children}</section>;
};

export { TodoList };
