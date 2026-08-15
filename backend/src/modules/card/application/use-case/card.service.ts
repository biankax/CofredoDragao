import { Injectable } from "@nestjs/common";
import { CreateCardDto } from "src/modules/card/application/dto/card.dto";
import { Card } from "src/modules/card/core/interfaces/card.interface";
import { randomUUID } from "node:crypto";

@Injectable()
export class CardsService {
    private cards: Card[] = [];

    create(dto: CreateCardDto): Card {
        const novoCard: Card = {
            ...dto,
            id: randomUUID(),
            userId: "user-fake-123",
        };
        this.cards.push(novoCard);
        return novoCard;
    }

    findAll(): Card[] {
        return this.cards;
    }
}