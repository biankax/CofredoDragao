import { Controller, Post, Get, Body } from "@nestjs/common";
import { TransactionsService } from "src/modules/transactions/core/use-case/transaction.service";
import type { CreateTransactionDto } from "./dto/transaction.dto";

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Post()
    create(@Body() dto: CreateTransactionDto) {
        return this.transactionsService.create(dto);
    }

    @Get()
    findAll() {
        return this.transactionsService.findAll();
    }
}