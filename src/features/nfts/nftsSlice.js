import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { getNtfs } from "./nftsApi";
import { ntfs } from "../../demo-data/ntfs-demo"


const initialState = {
    ntfs: [],
    isLoading: false,
    isError: false,
    error: "",
    categories: ["All Categories","Arts","Celebrities","Gaming","sport","Music","Crypto"],
    selectedCategory:"All Categories"
};

// async thunk
export const fetchNtfs = createAsyncThunk(
    "ntfs/fetchNtfs",
    async (page) => {
        const ntfs = await getNtfs(page);
        return ntfs;
    }
);

const nftsSlice = createSlice({
    name: "nfts",
    initialState,
    reducers: {
        categorySelected: (state, action) => {
            let filteredData = ntfs.filter((item,i)=>{
                return item.categories.includes(action.payload.toLowerCase())
                
            })
            state.selectedCategory=action.payload;
            state.ntfs = filteredData

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNtfs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchNtfs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.ntfs = action.payload;
            })
            .addCase(fetchNtfs.rejected, (state, action) => {
                state.isLoading = false;
                state.ntfs = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default nftsSlice.reducer;
export const { categorySelected } = nftsSlice.actions;
