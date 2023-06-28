import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { getTopFeaturedNtfs } from "./topFeaturedNftsApi";


const initialState = {
    topFeaturedNtfs: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchTopFeaturedNtfs = createAsyncThunk(
    "topFeaturedNtfs/fetchTopFeaturedNtfs",
    async () => {
        const topFeauredNtfs = await getTopFeaturedNtfs();
        return topFeauredNtfs;
    }
);

const TopFeaturedNftsSlice = createSlice({
    name: "topFeatuedNfts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopFeaturedNtfs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTopFeaturedNtfs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.topFeaturedNtfs = action.payload;
            })
            .addCase(fetchTopFeaturedNtfs.rejected, (state, action) => {
                state.isLoading = false;
                state.topFeaturedNtfs = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default TopFeaturedNftsSlice.reducer;
