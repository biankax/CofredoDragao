import { TransactionType } from "src/modules/transactions/application/enum/transactiontype.enum";
import { TransactionCategory } from "src/modules/transactions/application/enum/transactioncategory.enum";

export interface Transaction{
    id: string;
    userId: string;
    type : TransactionType;
    category: TransactionCategory;
    amount: number;
    description : string;
    date: Date;
}; //interface to define the transaction 