import React from "react";
import { Switch as AntSwitch } from "antd";

interface Props {
  className?: string;
  size?: "default" | "small";
  defaultChecked?: boolean;
}

// An antd switch is then returned with any external classes applied through the className prop

export function Switch({ className, size, defaultChecked }: Props) {
  return (
    <AntSwitch
      size={size}
      className={className}
      defaultChecked={defaultChecked}
    />
  );
}
