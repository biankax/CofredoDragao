import { Injectable } from '@nestjs/common';
import { Transaction } from './transaction.types';
import { randomUUID } from 'crypto';
import { CreateTransactionDto } from './transaction.types';

@Injectable()
export class TransactionsService {
    private transactions: Transaction[] = []

    create(dto: CreateTransactionDto){
        const novoId = randomUUID();
        const novaTransacao : Transaction = {
            ...dto,
            id: novoId,
            userId : "user-fake-123",
        };
        this.transactions.push(novaTransacao);        
        return novaTransacao;
    }
}

