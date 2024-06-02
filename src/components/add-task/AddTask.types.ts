type AddTaskProps = {
  setTodoTasks: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        desc: string;
      }[]
    >
  >;
};

export type { AddTaskProps };
