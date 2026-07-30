import { Transaction } from "src/modules/transactions/core/interfaces/transaction.interface";

export type CreateTransactionDto = Omit<Transaction, "id" | "userId">; //without id and userid for to backend to populate on its own  
export type UpdateTransactionDto = Partial<CreateTransactionDto>; //everything is optional , in case the user wants to change just one option
