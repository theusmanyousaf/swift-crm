import { fetchProducts } from "@/constants/actions/productActions";
import { Product } from "@prisma/client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch transactions
export const fetchProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const productsData = (await fetchProducts() || []);
        const products = productsData.map(product => ({
            ...product,
            createdAt: product.createdAt.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
            updatedAt: product.updatedAt.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        }))
        return products;
    }
);

interface ProductType {
    createdAt: string;
    updatedAt: string;
    productId: string;
    name: string;
    imageUrl: string;
    category: string;
    cost: number;
    price: number;
    quantity: number;
}

// Initial state
interface TransactionsState {
    products: ProductType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: TransactionsState = {
    products: [],
    status: 'idle',
    error: null,
};


// Create the slice
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProductsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export default productsSlice.reducer;