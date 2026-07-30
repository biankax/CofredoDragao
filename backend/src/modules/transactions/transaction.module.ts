import { Module } from "@nestjs/common";
import { TransactionsController } from "src/modules/transactions/application/transaction.controller";
import { TransactionsService } from "src/modules/transactions/core/use-case/transaction.service";

@Module({
    imports: [],
    controllers: [TransactionsController],
    providers:[
        TransactionsService,
    ],
    exports: [],  
})
export class TransactionsModule{};