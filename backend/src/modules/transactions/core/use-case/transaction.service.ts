import { Injectable } from '@nestjs/common';
import { Transaction } from '../interfaces/transaction.interface';
import { CreateTransactionDto } from '../../application/dto/transaction.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class TransactionsService {
    private transactions: Transaction[] = [];

    create(dto: CreateTransactionDto): Transaction {
        const novaTransacao: Transaction = {
            ...dto,
            id: randomUUID(),
            userId: "user-fake-123",
        };
        this.transactions.push(novaTransacao);
        return novaTransacao;
    }

    findAll(): Transaction[] {
        return this.transactions;
    }
}