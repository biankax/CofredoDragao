import { FinancialCard } from "../../components/FinancialCard";
import { LastTransactions } from "../../components/LastTransactions";
import { CategoryExpenses } from "../../components/CategoryExpenses";

import {
  Container,
  Header,
  Title,
  Subtitle,
  CardsContainer,
  BottomSection,
} from "./style";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <Title>Olá, Bianca!</Title>

        <Subtitle>
          Aqui está um resumo das suas finanças.
        </Subtitle>
      </Header>

      <CardsContainer>
        <FinancialCard
          label="Saldo"
          value="R$ 2.450,00"
          description="Disponível atualmente"
          icon="◇"
          variant="balance"
        />

        <FinancialCard
          label="Entradas"
          value="R$ 3.000,00"
          description="Total recebido este mês"
          icon="↑"
          variant="income"
        />

        <FinancialCard
          label="Saídas"
          value="R$ 550,00"
          description="Total gasto este mês"
          icon="↓"
          variant="expense"
        />
      </CardsContainer>

      <BottomSection>
        <CategoryExpenses />
        <LastTransactions />
      </BottomSection>
    </Container>
  );
}