type AddTaskProps = {
  setTodoTasks: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        desc: string;
        isChecked: boolean;
      }[]
    >
  >;
};

export type { AddTaskProps };
