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

export const TransactionList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const Transaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 14px;

  border-bottom: 1px solid #2b2f3d;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const TransactionInfo = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const Icon = styled.span`
  font-size: 18px;
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;
`;

export const Value = styled.span<{ $income?: boolean }>`
  color: ${({ $income }) =>
    $income ? "#6fcf97" : "#e57373"};

  font-size: 14px;
  font-weight: 600;
`;