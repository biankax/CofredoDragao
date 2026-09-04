import { Sidebar } from "../Sidebar";
import { Container, Main } from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Sidebar />

      <Main>
        {children}
      </Main>
    </Container>
  );
}