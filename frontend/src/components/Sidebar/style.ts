import styled from "styled-components";

export const Container = styled.aside`
  width: 240px;
  height: 100vh;

  padding: 24px 16px;

  background: ${({ theme }) => theme.colors.sidebar};
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
`;

export const Logo = styled.div`
  margin-bottom: 16px;

  img {
    width: 110px;
    height: auto;

    image-rendering: pixelated;
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled.a<{ $active?: boolean }>`
  width: 100%;
  padding: 12px 16px;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};

  text-decoration: none;

  background: ${({ $active, theme }) =>
    $active ? theme.colors.card : "transparent"};

  transition: 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.card};
  }
`;

export const Arrow = styled.span`
  width: 16px;
  margin-right: 4px;

  color: ${({ theme }) => theme.colors.primary};

  font-size: 16px;
  line-height: 1;
`;

export const NavIcon = styled.span`
  width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 8px;
`;