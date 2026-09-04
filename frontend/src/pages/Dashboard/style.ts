import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 40px;

  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.header`
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};

  font-family: "Minecraft", sans-serif;

  font-size: 32px;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 8px 0 0;

  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;

export const CardsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 16px;
`;

export const BottomSection = styled.div`
  display: grid;

  grid-template-columns: 1fr 1.2fr;

  gap: 16px;

  margin-top: 24px;
`;