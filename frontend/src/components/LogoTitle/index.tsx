import { ReactNode } from "react";
import { Title } from "./style";

interface LogoTitleProps {
  children: ReactNode;
}

export function LogoTitle({ children }: LogoTitleProps) {
  return <Title>{children}</Title>;
}