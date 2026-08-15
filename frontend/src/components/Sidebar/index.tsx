import { Container } from "./style";

export function Sidebar(){
    return (
        <Container>
            <h1>Cofre do Dragão</h1>
            
            <nav>
                <a href="#"> Dashboard</a>
                <a href="#">Transações</a>
                <a href="#">Cartões</a>
                <a href="#">Relatórios</a>
            </nav>
        </Container>
    );
}