import React, { useEffect } from 'react'
import Icons from './Icons'
import { Container } from './styles/Container.styled'
import { TopCollectionLeft,TopCollectionLeftInner,TopCollectionMiddle,CollectionMiddle,TopCollectionRight, TopCollectionWrapper, TopFlexContainer, TopCollectionRightWrapper } from './styles/TopCollection.styled'
import { ButtonSmallOutline } from './styles/Buttons.styled'
import TopCollectionOver from './TopCollectionOver'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopFeaturedNtfs } from '../features/topFeaturedNfts/topFeaturedNftsSlice'
import LoadingText from './LoadingText'

const TopCollection = () => {
    const dispatch = useDispatch();
    const { topFeaturedNtfs, isLoading, isError, error } = useSelector(
        (state) => state.topFeaturedNtfs
    );

    const {title,author_pic,total_eth,stock,picture} = topFeaturedNtfs.length> 0 && topFeaturedNtfs[0]

    useEffect(()=>{
        dispatch(fetchTopFeaturedNtfs())
    },[dispatch])

    let renderContent = null

    renderContent = isError && <h2>{error}</h2>



    if (isLoading) renderContent = <LoadingText font_size='16px' img_width='100px'/>;
    if (!isLoading && isError)
        renderContent = <h2>{error}</h2>;

    if (!isError && !isLoading && topFeaturedNtfs?.length === 0) {
        renderContent = <div>No NTfs found!</div>;
    }

    if (!isError && !isLoading && topFeaturedNtfs?.length > 0) {
       
        renderContent = topFeaturedNtfs.slice(1,4).map((item)=>{
            const {id,title,author_pic,total_eth,stock,picture,sell} = item
            return(
                <div className='top_middle_item' key={id}>
                    <img src={picture} alt="collect" />
                    <CollectionMiddle>
                        <h5>{title}</h5>
                        <div className='collection_inner'>
                            <img src={author_pic} alt="persion" />
                            <div className='box'>
                                {Icons.ethereum2}
                                <span>{total_eth} ETH</span>
                            </div>
                            <div className='out_of'>
                                {sell} of {stock}
                            </div>
                        </div>
                        
                        <ButtonSmallOutline>
                            Place a bid
                        </ButtonSmallOutline>
                    </CollectionMiddle>
                </div>
            )
        })

    }

    
  return (
    <TopCollectionWrapper>
        <Container>
            <TopFlexContainer gap="52px" alignitem="flex-start">
                {
                    isLoading ? <LoadingText/>  : 
                    <TopCollectionLeft>
                        <img className='left_img' src={picture}  alt="collection1"/>
                        <TopCollectionLeftInner>
                            <div className='top_left_inner1'>
                                <img src={author_pic} alt="persion" />
                                <div className='top_left_inner1_content'>
                                    <h5>{title}</h5>
                                    <span>{stock} in the stock</span>
                                </div>
                            </div>
                            <div className='top_left_inner2'>
                                <span className='top_left_inner2_title'>Highest Bid</span>
                                <div className='top_left_inner2_content'>
                                    <span>{Icons.ethereum1}</span>
                                    <h6>{total_eth} ETH</h6>
                                </div>
                            </div>
                        </TopCollectionLeftInner>
                    </TopCollectionLeft>
                 }
                <TopCollectionRightWrapper>
                    <TopCollectionMiddle>
                        {renderContent}
                    </TopCollectionMiddle>
                    {/* top collection over */}
                    <TopCollectionRight>
                        <h5 className='title'>Top Collections over </h5>
                        <h6 className='sub_title'>Last 7 days</h6>
                        <TopCollectionOver/>
                        
                    </TopCollectionRight>
                </TopCollectionRightWrapper>
            
            </TopFlexContainer>
        </Container>
    </TopCollectionWrapper>
  )
}

export default TopCollection