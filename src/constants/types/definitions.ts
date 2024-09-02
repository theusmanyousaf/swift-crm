export type CustomerField = {
    id: string;
    name: string;
};

export type TransactionType = {
    customer: {
        name: string;
        imageUrl: string;
    };
    product: {
        name: string;
        imageUrl: string;
        category: string;
        price: number;
    };
  } & {
    TransactionID: string;
    paymentStatus: string;
    quantity: number;
    amount: number;
    createdAt: Date;
    CustomerID: string;
    productId: string;
  }