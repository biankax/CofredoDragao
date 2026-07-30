import { Module } from "@nestjs/common";
import { TransactionsModule } from "src/modules/transactions/transaction.module";


@Module ({
    imports:[TransactionsModule],
    controllers: [],
    providers : [],
})
export class AppModule{};