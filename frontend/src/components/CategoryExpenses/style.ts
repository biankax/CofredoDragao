import styled from "styled-components";

export const Container = styled.section`
  padding: 24px;

  background: ${({ theme }) => theme.colors.card};
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
`;

export const Title = styled.h2`
  margin: 0 0 24px;

  color: ${({ theme }) => theme.colors.text};

  font-family: "Minecraft", sans-serif;

  font-size: 20px;
  font-weight: 700;
`;

export const CategoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 24px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 14px;
`;

export const CategoryName = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.text};
`;

export const CategoryValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

export const ProgressBackground = styled.div`
  width: 100%;
  height: 12px;

  padding: 2px;

  background: #303b48;
  border: 2px solid #3a4654;

  border-radius: 0;
`;

export const Progress = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}%;
  height: 100%;

  background: #f5c542;

  border-radius: 0;
`;

export const CategoryIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  image-rendering: pixelated;
  flex-shrink: 0;
`;

