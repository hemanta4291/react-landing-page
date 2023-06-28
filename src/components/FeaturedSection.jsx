import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchFeaturedNtfs } from '../features/featuredNfts/featuredNftsSlice'
import FeaturedBox from './FeaturedBox'
import LoadingText from './LoadingText'
import { Container } from './styles/Container.styled'
import { FeaturedWrapper,FeturedInner } from './styles/Featured.styled'

const FeaturedSection = () => {
    const dispatch = useDispatch();
    const { featuredNtfs, isLoading, isError, error } = useSelector(
        (state) => state.featuredNtfs
    );

    useEffect(()=>{
        dispatch(fetchFeaturedNtfs())
    },[dispatch])


    let renderContent = null

    renderContent = isError && <h2>{error}</h2>



    if (isLoading) renderContent = <LoadingText font_size='16px' img_width='100px'/>;
    if (!isLoading && isError)
    renderContent = <h2>{error}</h2>;

    if (!isError && !isLoading && featuredNtfs?.length === 0) {
        renderContent = <div className="col-span-12">No NTfs found!</div>;
    }

    if (!isError && !isLoading && featuredNtfs?.length > 0) {
       
        renderContent = featuredNtfs.map((item)=>(
            <FeaturedBox key={item.id} item={item}/>
        ))

    }


  return (
    <FeaturedWrapper>
        <Container>
            <h4>Collection Featured NFTs</h4>
            <FeturedInner>
                { 
                    renderContent
                }
            </FeturedInner>
        </Container>
    </FeaturedWrapper>
  )
}

export default FeaturedSection