import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { getTopOverNtfs } from "./topOverNftsApi";

const initialState = {
    topOverNtfs: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchTopOverNtfs = createAsyncThunk(
    "topOverNtfs/fetchTopOverNtfs",
    async () => {
        const topOverNtfs = await getTopOverNtfs();
        return topOverNtfs;
    }
);

const topOverNftsSlice = createSlice({
    name: "topOverNfts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopOverNtfs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTopOverNtfs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.topOverNtfs = action.payload;
            })
            .addCase(fetchTopOverNtfs.rejected, (state, action) => {
                state.isLoading = false;
                state.topOverNtfs = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default topOverNftsSlice.reducer;
