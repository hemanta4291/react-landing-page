import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Container } from './styles/Container.styled'
import {LoadMoreBtnWrapper,DiscoverMoreWrapper,DiscoverNtfsList } from './styles/DiscoverMore.styled'
import { ButtonLargeOutline } from './styles/Buttons.styled'
import { fetchNtfs } from '../features/nfts/nftsSlice';
import NtfsBox from './NtfsBox';
import FilterMenuByCategories from './FilterMenuByCategories';
import LoadingText from './LoadingText';

const DiscoverMoreSection = () => {
    const dispatch = useDispatch();
    const { ntfs, isLoading, isError, error } = useSelector(
        (state) => state.ntfs
    );

    const [page,setPage] = useState(1)

    useEffect(()=>{
        dispatch(fetchNtfs(page))
    },[page,setPage,dispatch])

    const loadMoreHandler = (item) => {
        setPage(item)
    }


    let renderContent = null

    renderContent = isError && <h2>{error}</h2>



    if (isLoading) renderContent = <LoadingText font_size='16px' img_width='100px'/>;
    if (!isLoading && isError)
    renderContent = <h2>{error}</h2>;

    if (!isError && !isLoading && ntfs?.length === 0) {
        renderContent = <div className="col-span-12">No NTfs found!</div>;
    }

    if (!isError && !isLoading && ntfs?.length > 0) {
       
        renderContent = ntfs.map((ntf)=>(
            <NtfsBox item= {ntf} key={ntf.id}/>
        ))

    }



  return (
    <DiscoverMoreWrapper>
        <Container>
            <h3>Discover more NFTs</h3>
            <FilterMenuByCategories/>
            <DiscoverNtfsList>
                {/* Here render view content */}
                {renderContent}
                
            </DiscoverNtfsList>
            <LoadMoreBtnWrapper>
                <ButtonLargeOutline onClick={()=>loadMoreHandler(2)}>
                    More NFTs
                </ButtonLargeOutline>
            </LoadMoreBtnWrapper>
        </Container>
    </DiscoverMoreWrapper>
  )
}

export default DiscoverMoreSection