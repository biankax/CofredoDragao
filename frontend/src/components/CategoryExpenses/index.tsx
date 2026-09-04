import {
  Container,
  Title,
  CategoryList,
  Category,
  CategoryHeader,
  CategoryName,
  CategoryValue,
  ProgressBackground,
  Progress,
  CategoryIcon,
} from "./style";

import { PixelIcon } from "../PixelIcon";

const categories = [
  {
    name: "Alimentação",
    icon: "/icons/categories/alimentação.png",
    value: "R$ 250,00",
    width: 70,
  },
  {
    name: "Moradia",
    icon: "/icons/categories/Frame 8.png",
    value: "R$ 180,00",
    width: 55,
  },
  {
    name: "Água e luz",
    icon: "/icons/categories/Frame 5.png",
    value: "R$ 120,00",
    width: 40,
  },
  {
    name: "Transporte",
    icon: "/icons/categories/Frame 7.png",
    value: "R$ 80,00",
    width: 30,
  },
  {
    name: "Lazer",
    icon: "/icons/categories/Frame 6.png",
    value: "R$ 60,00",
    width: 25,
  },
  {
    name: "Saúde",
    icon: "/icons/categories/Frame 3.png",
    value: "R$ 50,00",
    width: 20,
  },
  {
    name: "Educação",
    icon: "/icons/categories/Frame 9.png",
    value: "R$ 40,00",
    width: 15,
  },
  {
    name: "Outros",
    icon: "/icons/categories/Frame 12.png",
    value: "R$ 30,00",
    width: 10,
  },
];

export function CategoryExpenses() {
  return (
    <Container>
      <Title>Gastos por categoria</Title>

      <CategoryList>
        {categories.map((category) => (
        <Category key={category.name}>
          <CategoryHeader>
            <CategoryName>
              <PixelIcon
                src={category.icon}
                alt=""
              />

              {category.name}
            </CategoryName>

            <CategoryValue>{category.value}</CategoryValue>
          </CategoryHeader>

          <ProgressBackground>
            <Progress $width={category.width} />
          </ProgressBackground>
        </Category>
      ))}
    </CategoryList>
    </Container>
  );
}