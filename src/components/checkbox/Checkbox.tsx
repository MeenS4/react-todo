import styles from "./Checkbox.module.scss";

const Checkbox = ({
  isChecked,
  className,
}: {
  isChecked: boolean;
  className: string;
}) => {
  return (
    <div className={`${styles["checkbox"]} ${className}`}>
      {isChecked ? "x" : "o"}
    </div>
  );
};

export { Checkbox };
