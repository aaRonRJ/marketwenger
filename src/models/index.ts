export interface Player {
    id?: number;
    name: string;
    balance: number;
}

export interface Expense {
    id?: number;
    type: string;
    quantity: number;
    playerId: number;
}