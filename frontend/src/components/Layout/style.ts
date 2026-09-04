import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;

  background: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.main`
  flex: 1;

  background: ${({ theme }) => theme.colors.background};
`;