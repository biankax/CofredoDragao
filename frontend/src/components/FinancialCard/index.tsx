import {
  Card,
  CardHeader,
  Icon,
  Label,
  Value,
  Description,
} from "./style";

interface FinancialCardProps {
  label: string;
  value: string;
  description: string;
  icon: string;
  variant: "balance" | "income" | "expense";
}

export function FinancialCard({
  label,
  value,
  description,
  icon,
  variant,
}: FinancialCardProps) {
  return (
    <Card $variant={variant}>
      <CardHeader>
        <Icon>{icon}</Icon>

        <Label>{label}</Label>
      </CardHeader>

      <Value>{value}</Value>

      <Description>
        {description}
      </Description>
    </Card>
  );
}