import styled from "styled-components";

export const HeaderWrapper = styled.header`
    border-bottom: 1px solid ${({theme})=>theme.color.gray_10};
    height: 108px;
    line-height: 100px;
    @media only screen and (min-width: ${({theme})=>theme.breakPoint.mobileExtra}) and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        border-bottom: 0;
    }

`
export const FlexHeaderContainer = styled.div`
    display: flex;
    align-items: ${({alignItem})=> alignItem? alignItem : "center"};
    justify-content: ${({justify})=> justify? justify : "space-between"};
    grid-gap: ${({gap})=> gap? gap : ""};
    transition: all linear 0.2s;


    /* responsive */
    @media only screen and (min-width: ${({theme})=>theme.breakPoint.mobileExtra}) and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        position: fixed;
        display: block;
        background: ${({theme})=>theme.color.white};
        z-index: 9;
        flex-direction: column;
        width: 100%;
        height:100%;
        grid-gap: 52px;
        padding: 0 10px 50px 10px;
        transform: translateX(${(props)=>props.active? "0" : "105%"});
        box-shadow: 0 0 15px 10px ${({theme})=>theme.color.gray_5};
        left: 0;
    }


`

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 35px;
    flex-basis: 50%;

    & .logo{
            border-right: 1px solid ${({theme})=>theme.color.gray_3};
            line-height: 47px;
            display: inline-block;
            height: 38px;
            padding-right: 31px;



            & a{
                display: inline-flex;
            }

            @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
                border-right: 0px;
                border-bottom: 1px solid ${({theme})=>theme.color.gray_10};
                width:100%;
                display: block;
                padding-bottom: 60px;

            }
        }
       
    

    & ul{
        display: flex;
        align-items: center;
        grid-gap: 48px;
        
        & a{
            color: ${({theme})=>theme.color.black};
            font-size:${({theme})=>theme.fontSize.body1_font_size} ;
            line-height:${({theme})=>(theme.lineHeight.lh_38_4)} ;
            letter-spacing:${({theme})=>(theme.letterSpacing.ls_04)};
            transition: all linear 0.3s;

            &:hover{
                color: ${({theme})=>theme.color.secondary_dark};
            }
        }

        @media only screen and (min-width: ${({theme})=>theme.breakPoint.tab}) and (max-width: 1199px) {
            grid-gap: 24px
        }
    }

     /* responsive */
     @media only screen and (min-width: ${({theme})=>theme.breakPoint.mobileExtra}) and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        align-items: flex-start;
        gap: 0;
        width: 100%;
        flex-direction: column;
        padding: 20px 0 0 0;
        flex-basis: 100%;

        & ul{
            flex-direction: column;
            align-items: flex-start;
            grid-gap: 32px;
            padding-bottom: 86px;

            & li{
                height: 12px;
            }
        }
    }
    

`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 20px;


     /* responsive */
     @media only screen and (min-width: ${({theme})=>theme.breakPoint.mobileExtra}) and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }
    
`

export const Input = styled.div`
    position: relative;


    & input{
        border: 1px solid ${({theme})=>theme.color.gray_10};
        border-radius: 100px;
        height: 50px;
        width: 300px;
        padding: 0 30px;
        color: ${({theme})=>theme.color.gray_25};
        font-size:${({theme})=>theme.fontSize.body1_font_size} ;
        line-height:${({theme})=>(theme.lineHeight.lh_20_83)} ;
        letter-spacing:${({theme})=>(theme.letterSpacing.ls_04)};

        &:focus{
            outline: 0;
        }

        &::placeholder{
            color: ${({theme})=>theme.color.gray_25};
            font-size:${({theme})=>theme.fontSize.body1_font_size} ;
            line-height:${({theme})=>(theme.lineHeight.lh_20_83)} ;
            letter-spacing:${({theme})=>(theme.letterSpacing.ls_04)};
        }


        @media only screen and (min-width: ${({theme})=>theme.breakPoint.tab}) and (max-width: 1199px) {
            width: 100%;
            max-width: 300px;
        }
    }

    & span{
        position: absolute;
        right: 18px;
        top:7px;
    }



    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        order:3;
        width:100%;

        & input{
            width:100%;
        }
    }
`

// Close button
export const HeaderMenuClose = styled.div`
    background: ${({theme})=>theme.color.red_80};
    display: ${(props)=>props.active ? "flex" : "none"};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    padding: 3px;
    cursor: pointer;
    position: fixed;
    right: 10px;
    top: 23px;

    & svg path{
        fill: ${({theme})=>theme.color.white};
    }
`



// for mobile header
export const HeaderForMobile = styled.div`
    background: ${({theme})=>theme.color.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({theme})=>theme.color.gray_10};
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 15px;
    z-index: 9;


    & a{
        display: inline-flex;
    }

    & div{
        display: inline-flex;
        cursor: pointer;
    }

    @media only screen and (min-width: ${({theme})=>theme.breakPoint.tab}) {
            display: none;
    }

`




