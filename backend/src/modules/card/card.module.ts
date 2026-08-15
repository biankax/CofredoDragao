import { Module } from "@nestjs/common";
import { CardsController } from "./application/card.controller";
import { CardsService } from "./application/use-case/card.service";

@Module({
    imports: [],
    controllers: [CardsController],
    providers: [CardsService],
    exports: [],
})
export class CardModule {}