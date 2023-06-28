import { configureStore } from "@reduxjs/toolkit";
import ntfsReducer from "../features/nfts/nftsSlice";
import featuredNnfsReducer from '../features/featuredNfts/featuredNftsSlice'
import topOverNtfsReducer from '../features/topOverNfts/topOverNftsSlice'
import topFeaturedNtfsReducer from '../features/topFeaturedNfts/topFeaturedNftsSlice'


export const store = configureStore({
    reducer: {
        ntfs:ntfsReducer,
        featuredNtfs:featuredNnfsReducer,
        topOverNtfs:topOverNtfsReducer,
        topFeaturedNtfs:topFeaturedNtfsReducer
    },
});
