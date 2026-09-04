import {
  Container,
  Logo,
  Navigation,
  NavItem,
  Arrow,
  NavIcon,
} from "./style";

import { PixelIcon } from "../PixelIcon";

export function Sidebar() {
  return (
    <Container>
      <Logo>
        <img
          src="/icons/categories/logo3.png"
          alt="Cofre do Dragão"
        />
      </Logo>

      <Navigation>
        <NavItem href="#" $active>
          <Arrow>▸</Arrow>

          <NavIcon>
            <PixelIcon
              src="/icons/categories/Frame 13.png"
              alt="Início"
            />
          </NavIcon>

          <span>Início</span>
        </NavItem>

        <NavItem href="#">
          <Arrow />

          <NavIcon>
            <PixelIcon
              src="/icons/categories/Frame 14.png"
              alt="Transações"
            />
          </NavIcon>

          <span>Transações</span>
        </NavItem>

        <NavItem href="#">
          <Arrow />

          <NavIcon>
            <PixelIcon
              src="/icons/categories/Frame 15.png"
              alt="Cartões"
            />
          </NavIcon>

          <span>Cartões</span>
        </NavItem>

        <NavItem href="#">
          <Arrow />

          <NavIcon>
            <PixelIcon
              src="/icons/categories/Frame 16.png"
              alt="Relatórios"
            />
          </NavIcon>

          <span>Relatórios</span>
        </NavItem>
      </Navigation>
    </Container>
  );
}