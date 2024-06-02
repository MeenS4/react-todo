import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <div className={styles["button"]} onClick={onClick}>
      {label}
    </div>
  );
};

export { Button };
