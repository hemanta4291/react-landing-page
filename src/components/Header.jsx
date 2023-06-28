import React, { useState } from 'react'
import { Container } from './styles/Container.styled'
import { HeaderLeft,Input, HeaderRight,HeaderWrapper, FlexHeaderContainer, HeaderMenuClose, HeaderForMobile } from './styles/Header.styled'
import HeaderLogo from '../assets/images/header-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { ButtonMediumOutline, ButtonSmallContained } from './styles/Buttons.styled'
import Icons from './Icons'
const Header = () => {

    const [mobileToggle,setMobileToggle] = useState(false)

    let activeStyle = {
        textDecoration: "underline",
      };
    
    let activeClassName = "underline";

    
    const mobileMenuHandler = (active) => {
        if(active === 'open'){
            setMobileToggle(true)
        }else{
            setMobileToggle(false)
        }
        
    }

  return (
    <HeaderWrapper>
        <Container>
            { !mobileToggle && 
                <HeaderForMobile>
                    <Link to="/"> <img src={HeaderLogo} alt="header logo"/></Link>
                    <div onClick={()=>mobileMenuHandler("open")}>
                        {Icons.mobileMenu}
                    </div>
                </HeaderForMobile>
            }
            
            <FlexHeaderContainer active={mobileToggle}>
                <HeaderLeft>
                    <Link to="/"> <img src={HeaderLogo} alt="header logo"/></Link>
                    <ul>
                        <li>
                        <NavLink
                            to="market"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            Marketplace
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="resource"
                            className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                            }
                        >
                            Resource
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="about">
                            {({ isActive }) => (
                            <span
                                className={
                                isActive ? activeClassName : undefined
                                }
                            >
                                About
                            </span>
                            )}
                        </NavLink>
                        </li>
                    </ul>
                </HeaderLeft>
                <HeaderRight>
                    <Input>
                        <input placeholder='Search'/>
                        <span>{Icons.search}</span>
                    </Input>
                    <ButtonSmallContained onClick={()=>alert("ok")}>
                        Upload
                    </ButtonSmallContained>
                    <ButtonMediumOutline>
                        Connect Wallet
                    </ButtonMediumOutline>
                </HeaderRight>
            </FlexHeaderContainer>
        </Container>

        <HeaderMenuClose onClick={()=>mobileMenuHandler("close")} active={mobileToggle}>
            {Icons.close}
        </HeaderMenuClose>
    </HeaderWrapper>
  )
}

export default Header