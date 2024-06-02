import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

const Input = ({ onChange, value, label = "Type in.." }: InputProps) => {
  return (
    <div className={styles["input-wrapper"]}>
      <p>{label}</p>

      <input
        className={styles["input"]}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </div>
  );
};

export { Input };
