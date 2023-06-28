import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { Container } from '../components/styles/Container.styled'
import { HeaderLeft,Input, HeaderRight,HeaderWrapper, FlexHeaderContainer, HeaderMenuClose, HeaderForMobile } from '../components/styles/Header.styled'
import HeaderLogo from '../assets/images/header-logo.png'
import { ButtonMediumOutline, ButtonSmallContained } from '../components/styles/Buttons.styled'
import Icons from '../components/Icons'


const Navbar = () => {

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
                        {/* {Icons.mobileMenu} */}
                        <FaBars fontSize="25px" />
                    </div>
                </HeaderForMobile>
            }
            
            <FlexHeaderContainer active={mobileToggle}>
                <HeaderLeft>
                    <div className='logo'>
                      <Link to="/"> <img src={HeaderLogo} alt="header logo"/></Link>
                    </div>
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

export default Navbar