import { ReactNode, MouseEvent } from "react";

import { Button as AntButton } from "antd";

import classes from "./button.module.css";

interface Props {
  className?: string;
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
  children: ReactNode | ReactNode[];

  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

// An antd button is then returned with any external classes applied through the className prop
// Note how internally classes.button is applied, using CSS Modules
export function Button({ className, type, children, onClick }: Props) {
  return (
    <AntButton
      type={type}
      className={`${classes.button} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </AntButton>
  );
}
