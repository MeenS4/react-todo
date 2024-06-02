import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  label: string | ReactNode;
  onClick?: MouseEventHandler;
};

export type { ButtonProps };
