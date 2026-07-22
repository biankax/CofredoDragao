export enum TransactionType{
    ENTRADA = "ENTRADA",
    SAIDA = "SAIDA",
}; //enum to define the transaction type

export enum TransactionCategory{
    ALIMENTACAO = "ALIMENTACAO",
    MORADIA= "MORADIA",
    AGUA_LUZ = "AGUA_LUZ",
    TRANSPORTE = "TRASNPORTE",
    LAZER = "LAZER",
    SAUDE = "SAUDE",
    EDUCACAO ="EDUCACAO",
    OUTROS =  "OUTROS",
}; //enum to define the transaction category

export interface Transaction{
    id: string;
    userId: string;
    type : TransactionType;
    category: TransactionCategory;
    amount: number;
    description : string;
    date: Date;
}; //interface to define the transaction 

export type CreateTransactionDto = Omit<Transaction, "id" | "userId">; //without id and userid for to backend to populate on its own  
export type UpdateTransactionDto = Partial<CreateTransactionDto>; //everything is optional , in case the user wants to change just one option

