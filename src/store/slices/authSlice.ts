// src/features/auth/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '@/auth';

export const fetchSession = createAsyncThunk('auth/fetchSession', async () => {
    try {
        const session = await auth();
        console.log('Fetched session:', session); // Log the session data
        return session;
    } catch (error) {
        console.error('Error fetching session:', error);
        return null;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        session: null,
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSession.pending, (state) => {
                console.log('Session fetch pending');
                state.status = 'loading';
            })
            .addCase(fetchSession.fulfilled, (state, action) => {
                console.log('Session fetch fulfilled:', action.payload);
                state.status = 'succeeded';
                state.session = action.payload;
            })
            .addCase(fetchSession.rejected, (state, action) => {
                console.error('Session fetch rejected:', action.error.message);
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;
