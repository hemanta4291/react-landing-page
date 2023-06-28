import React from 'react'
import { ButtonLargeContained } from './styles/Buttons.styled'
import { Container } from './styles/Container.styled'
import { HeroWrapper,ButtonWithCountWr,HeroLeft ,HeroRight,HeroCount,BidDateBox, FlexHeroWrapper} from './styles/Hero.styled'
import Heroimg1 from '../assets/images/hero1.png'
import Heroimg2 from '../assets/images/hero2.png'
import Heroimg3 from '../assets/images/hero3.png'
import HeroimgPersion from '../assets/images/sell-nfts-persion1.png'
import LiveAuction from '../assets/images/live-auction.png'
import Icons from './Icons'
import { FaPlus } from 'react-icons/fa';
import { HourMinuteSecond } from '../utils/HourMinuteSecond'


const HeroSection = () => {
    const {hour,minute,second} = HourMinuteSecond()
  return (
    <HeroWrapper>
        <Container>
            <FlexHeroWrapper alignItem="flex-start">
                <HeroLeft>
                    <h1>Discover, and collect Digital Art  NFTs </h1>
                    <p>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                    <ButtonWithCountWr>
                        <ButtonLargeContained>
                            Explore Now
                        </ButtonLargeContained>
                        <HeroCount>
                            <div>
                                <h2>98k <FaPlus fontSize="30px"/></h2>
                                <span>Artwork</span>
                            </div>
                            <div>
                           
                                <h2>12k <FaPlus fontSize="30px"/></h2>
                                <span>Auction</span>
                            </div>
                            <div>
                                <h2>15k <FaPlus fontSize="30px"/></h2>
                                <span>Artis</span>
                            </div>
                        </HeroCount>
                    </ButtonWithCountWr>
                </HeroLeft>
                <HeroRight>
                    <div className='hero_right'>
                        <div className='hero_banner_wr'>
                            <img className='hero_img1' alt="hero_img1" src={Heroimg1} />
                            <img className='hero_img2' alt="hero_img2" src={Heroimg2} />
                            <img className='hero_img3' alt="hero_img3" src={Heroimg3} />
                        </div>

                        <div className='profile'>
                            <h4>Abstr Gradient NFT</h4>
                            <div className='pro_content'>
                                <img src={HeroimgPersion} alt="hero" />
                                <span>Arkhan17</span>
                            </div>
                            
                        </div>
                        <BidDateBox>
                            <div className='bid_left'>
                                <span className='bd_title'>Current Bid</span>
                                <div className='bid_left_content'>
                                    <span>{Icons.ethereum1}</span>
                                    <span>0.25 ETH</span>
                                </div>
                            </div>
                            <div className='date_right'>
                                <span className='bd_title'>Ends in</span>
                                <div className='date_left_content'>
                                    <span>{hour}</span>h  <span>{minute}</span> m  <span>{second}</span> s
                                </div>
                            </div>
                        </BidDateBox>
                        <div className='live'>
                            <img src={LiveAuction} alt="live" />
                        </div>
                    </div>
                    
                </HeroRight>
            </FlexHeroWrapper>
        </Container>
    </HeroWrapper>
  )
}

export default HeroSection