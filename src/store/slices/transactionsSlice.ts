import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTransactions } from '@/constants/actions/transactionActions'; // Adjust the import path
import { TransactionType } from '@/constants/types/definitions'; // Adjust the import path

// Async thunk to fetch transactions
export const fetchTransactionsAsync = createAsyncThunk(
    'transactions/fetchTransactions',
    async () => {
        const transactionData = (await fetchTransactions() || []);
        const transactions = transactionData.map(transaction => ({
            ...transaction,
            createdAt: transaction.createdAt.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        }))
        // Convert `createdAt` to an ISO string
        return transactions;
    }

)

// Initial state
interface TransactionsState {
    transactions: TransactionType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: TransactionsState = {
    transactions: [],
    status: 'idle',
    error: null,
};

// Create the slice
const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactionsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTransactionsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.transactions = action.payload;
            })
            .addCase(fetchTransactionsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch transactions';
            });
    },
});

export default transactionsSlice.reducer;
