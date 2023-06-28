import React from 'react'
import { Container } from './styles/Container.styled'
import FeatureImg from '../assets/images/sell-nfts-large.png'
import FeatureMediumImg from '../assets/images/sell-nfts-medium.png'
import AuthorPic from '../assets/images/sell-nfts-persion1.png'
import { CrateSellWrapper,CrateSellInterContainer,CrateSellInterContainerLeft,CrateSellInterContainerRight } from './styles/CrateSellWrapper'
import { ButtonLargeContained } from './styles/Buttons.styled'



const CrateSellSection = () => {
  return (
    <CrateSellWrapper>
        <Container>
            <CrateSellInterContainer>
                <CrateSellInterContainerLeft>
                    <div className='sell_left'>
                        <div className='sell_left_box'>
                            <img src={FeatureImg}  alt="f_img"/>
                            <img className='sell_left_author' alt='sel author' src={AuthorPic} />
                        </div>
                        <div className='sell_left_box' alt="sell box">
                            <img src={FeatureMediumImg} alt="sell medium" />
                            <img className='sell_left_author' alt='sell author' src={AuthorPic} />
                        </div>
                    </div>

                    <div className='sell_right_box'>
                            <img src={FeatureMediumImg} alt="featureImg" />
                            <img  className='sell_left_author' alt='sell author' src={AuthorPic} />
                        </div>
                </CrateSellInterContainerLeft>
                <CrateSellInterContainerRight>
                    <div>
                        <h3>Create and sell your NFTs</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                        <ButtonLargeContained>
                        Sign Up Now
                        </ButtonLargeContained>
                    </div>
                </CrateSellInterContainerRight>
            </CrateSellInterContainer>
        </Container>
    </CrateSellWrapper>
  )
}

export default CrateSellSection