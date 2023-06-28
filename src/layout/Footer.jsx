import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/styles/Container.styled'
import { FooterWrapper,FooterCopyWrite,FooterContainer,FooterLeft,FooterMiddle1,FooterMiddle2,FooterRight } from '../components/styles/Footer.styled'
import FooterLogo from '../assets/images/footer-logo.png'
import Icons from '../components/Icons'


const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterLeft>
          <Link to="/"> <img src={FooterLogo} alt="footer logo"/></Link>
            <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
            <ul className='social'>
                <li><Link to="/" className='facebook' >{Icons.facebook}</Link></li>
                <li ><Link to="/" className='twitter'>{Icons.twitter}</Link></li>
                <li ><Link to="/" className='linkdin'>{Icons.linkdin}</Link></li>
            </ul>
          </FooterLeft>
          <FooterMiddle1>
            <h6>Market Place</h6>
            <ul className='footer_link'>
              <li><Link to='/'>All NFTs</Link></li>
              <li><Link to='/'>New</Link></li>
              <li><Link to='/'>Arts</Link></li>
              <li><Link to='/'>Sports</Link></li>
              <li><Link to='/'>Utility</Link></li>
              <li><Link to='/'>Music</Link></li>
              <li><Link to='/'>Domain Name</Link></li>
            </ul>
          </FooterMiddle1>
          <FooterMiddle2>
            <h6>My Account</h6>
            <ul className='footer_link'>
              <li><Link to='/'>Profile</Link></li>
              <li><Link to='/'>Favorite</Link></li>
              <li><Link to='/'>My Collections</Link></li>
              <li><Link to='/'>Settings</Link></li>
            </ul>
          </FooterMiddle2>
          <FooterRight>
            <h6>Stay in the loop</h6>
            <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>

            <div className='subscriber'> 
              <input placeholder='Enter your email address..'/>
              <button>Subscribe Now</button>
            </div>
          
          </FooterRight>
        </FooterContainer>
        <FooterCopyWrite>
          <p>Copyright © 2022 Avi Yansah</p>
        </FooterCopyWrite>
      </Container>
    </FooterWrapper>
  )
}

export default Footer