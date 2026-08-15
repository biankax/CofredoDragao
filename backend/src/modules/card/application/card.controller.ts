import { Controller, Post, Get, Body } from "@nestjs/common";
import type { CreateCardDto } from "src/modules/card/application/dto/card.dto";
import { CardsService } from "./use-case/card.service";

@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) {}

    @Post()
    create(@Body() dto: CreateCardDto) {
        return this.cardsService.create(dto);
    }

    @Get()
    findAll() {
        return this.cardsService.findAll();
    }
}