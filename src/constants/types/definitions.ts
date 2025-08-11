export type CustomerField = {
    id: string;
    name: string;
};

export type TransactionType = {
    customer: {
        name: string;
        imageUrl: string;
        country: string
    };
    product: {
        name: string;
        imageUrl: string;
        category: string;
        price: number;
        cost: number
    };
} & {
    TransactionID: string;
    paymentStatus: string;
    quantity: number;
    amount: number;
    createdAt: string;
    CustomerID: string;
    productId: string;
}