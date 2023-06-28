import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { getFeaturedNtfs } from "./featuredNftsApi";


const initialState = {
    featuredNtfs: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchFeaturedNtfs = createAsyncThunk(
    "featuredNtfs/fetchFeaturedNtfs",
    async () => {
        const feauredNtfs = await getFeaturedNtfs();
        return feauredNtfs;
    }
);

const featuredNftsSlice = createSlice({
    name: "featuedNfts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeaturedNtfs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchFeaturedNtfs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.featuredNtfs = action.payload;
            })
            .addCase(fetchFeaturedNtfs.rejected, (state, action) => {
                state.isLoading = false;
                state.featuredNtfs = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default featuredNftsSlice.reducer;
