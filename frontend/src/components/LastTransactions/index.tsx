import {
  Container,
  Title,
  TransactionList,
  Transaction,
  TransactionInfo,
  Name,
  Value,
} from "./style";

import { PixelIcon } from "../PixelIcon";

export function LastTransactions() {
  return (
    <Container>
      <Title>Últimas transações</Title>

      <TransactionList>
        <Transaction>
          <TransactionInfo>
            <PixelIcon
              src="/icons/categories/alimentação.png"
              alt="Alimentação"
            />

            <Name>Alimentação</Name>
          </TransactionInfo>

          <Value>− R$ 35,00</Value>
        </Transaction>

        <Transaction>
          <TransactionInfo>
            <PixelIcon
              src="/icons/categories/Frame 7.png"
              alt="Transporte"
            />

            <Name>Transporte</Name>
          </TransactionInfo>

          <Value>− R$ 10,00</Value>
        </Transaction>

        <Transaction>
          <TransactionInfo>
            <PixelIcon
              src="/icons/categories/Frame 6.png"
              alt="Lazer"
            />

            <Name>Lazer</Name>
          </TransactionInfo>

          <Value>− R$ 50,00</Value>
        </Transaction>

        <Transaction>
          <TransactionInfo>
            <PixelIcon
              src="/icons/categories/cofre.png"
              alt="Bolsa"
            />

            <Name>Cofre</Name>
          </TransactionInfo>

          <Value $income>+ R$ 800,00</Value>
        </Transaction>
      </TransactionList>
    </Container>
  );
}