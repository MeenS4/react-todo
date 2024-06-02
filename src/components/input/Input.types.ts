import { ReactNode } from "react";

type InputProps = {
  onChange: Function;
  value: string | number | readonly string[] | undefined;
  label?: string | ReactNode;
};

export type { InputProps };
