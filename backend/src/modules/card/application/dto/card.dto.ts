import { Card } from "src/modules/card/core/interfaces/card.interface";

export type CreateCardDto = Omit<Card, "id" | "userId">;
export type UpdateCardDto = Partial<CreateCardDto>;