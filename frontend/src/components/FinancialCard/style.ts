import styled from "styled-components";

interface CardProps {
  $variant: "balance" | "income" | "expense";
}

export const Container = styled.div`
  padding: 20px;

  background: ${({ theme }) => theme.colors.card};
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};

  border-radius: 0;
`;

export const Card = styled.div<CardProps>`
  padding: 20px;

 background: ${({ theme }) => theme.colors.card};

  border: 2px solid ${({ theme }) => theme.colors.cardBorder};

  box-sizing: border-box;

  transition: 0.15s;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ $variant }) => {
      if ($variant === "income") return "#6fcf97";
      if ($variant === "expense") return "#e57373";

      return "#d6a73a";
    }};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  margin-bottom: 16px;
`;

export const Icon = styled.span`
  font-size: 18px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.text};

  font-family: "Minecraft", sans-serif;
  font-weight: 600;
`;

export const Value = styled.strong`
  display: block;

  color: ${({ theme }) => theme.colors.text};

  font-size: 28px;
  font-weight: 700;
`;

export const Description = styled.span`
  display: block;

  margin-top: 8px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 13px;
`;