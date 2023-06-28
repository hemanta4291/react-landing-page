import styled from "styled-components";
import DotImage from '../../assets/images/Dot.png'

export const HeroWrapper = styled.div`
    padding: 77px 0 122px 0;

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        padding: 20px 0 60px 0;
    }
`

export const FlexHeroWrapper = styled.div`
    display: flex;
    align-items: ${({alignItem})=> alignItem? alignItem : "center"};
    justify-content: ${({justify})=> justify? justify : "space-between"};
    grid-gap: ${({gap})=> gap? gap : ""};

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        flex-direction: column;
    }
`


export const HeroLeft = styled.div`
    flex-basis: 60%;

    position: relative;

    &::after{
        background: url(${DotImage});
        content: "";
        position: absolute;
        left: -50px;
        width: 196px;
        height: 154px;
        bottom: 10px;
        z-index: -1;
    }

    & h1{
        padding: 0 134px 0 0;
    }
    & p{
        margin: 22px 250px 40px 0;
        color: ${({theme})=>theme.color.gray_80};
        font-size: ${({theme})=>theme.fontSize.h5_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_26_04};
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}){
        & h1{
            padding: 0;
        }
        & p{
            margin-right: 0;
        }
    }

`
export const HeroRight = styled.div`
    flex-basis: 40%;

    & .hero_right{
        position: relative;

        & .hero_banner_wr{
            display: flex;

            & img{
                width: 400px;
                height: 440px;
                object-fit: cover;
                border-radius: 24px;
            }

            & .hero_img2{
                position: absolute;
                left: 38px;
                height: 390px;
                top: 50%;
                transform: translateY(-50%);
                z-index: -1;
            }
            & .hero_img3{
                position: absolute;
                left: 70px;
                height: 340px;
                top: 50%;
                transform: translateY(-50%);
                z-index: -2;
            }
        }
        & .live{
            position: absolute;
            top: 188px;
            left: -72px;

            @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}){
                left: -17px;
            }
        }

        /* responsive */
        @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}) {
            & .hero_banner_wr {
                .hero_img2{
                    left: 26px;
                }
                .hero_img3{
                    left: 55px;
                }
                img {
                     width: 100% !important;
                }
            } 
            
        }
        @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}) {
            .hero_img2{
                    display: none;
                }
            .hero_img3{
                   display: none;
                }
            
        }

    }
   
    & .profile{
        position: absolute;
        top: 26px;
        left: 26px;

        & h4{
            color: ${({theme})=>theme.color.white};
            font-family:${({theme})=>theme.fontFamily.dm_snas} ;
            text-transform: capitalize;
            margin: 0 0 10px 0;
        }

        & .pro_content{
            display: flex;
            grid-gap: 14px;
            align-items: center;

            & img{
                width: 32px;
                height: 32px;
                border-radius: 50%;
                object-fit: cover;
            }

            & span{
                color: ${({theme})=>theme.color.white};
                font-size: ${({theme})=>theme.fontSize.body2_font_size};
                font-weight: ${({theme})=>theme.fontWeight.fw_700};
                line-height: ${({theme})=>theme.lineHeight.lh_26_04};
            }
        }
    }


    /* responsive */
    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        flex-basis: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 40px 0 0 0;
    }

    
`
export const BidDateBox = styled.div`
   background: ${({theme})=>theme.color.white_02_rgba};
    backdrop-filter: blur(25px);
    border-radius: 12px;
    padding: 14px 24px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    width: 100%;
    left: 25px;
    max-width: 348px;
    bottom: 30px;

    & .bd_title{
        color: ${({theme})=>theme.color.white};
        font-size: ${({theme})=>theme.fontSize.body4_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_500};
        line-height: ${({theme})=>theme.lineHeight.lh_15_62};
        margin: 0 0 8px 0;
        display: block;
    }
    & .bid_left_content{
           display: flex;
           align-items: center;
           grid-gap: 5px;
           color: ${({theme})=>theme.color.white};
            font-size: ${({theme})=>theme.fontSize.body1_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_700};
            line-height: ${({theme})=>theme.lineHeight.lh_20_83};
           & span{
                display: inline-flex;

           }
           & svg path{
                fill: ${({theme})=>theme.color.white};
           }
        }
    & .date_left_content{
        color: ${({theme})=>theme.color.white};
        font-size: ${({theme})=>theme.fontSize.body1_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_20_83};

        & span{
            font-weight: ${({theme})=>theme.fontWeight.fw_700};
        }
    }


    /* responsive */
    @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}) {
        left: 0px;
        max-width: 100%;
    }
`

export const ButtonWithCountWr = styled.div`
    /* position: relative;

    &::after{
        content: "";
        position: absolute;
        background: url(${DotImage});
    } */
    
`
export const HeroCount = styled.div`
    padding: 30px 0 0 0;
    display: flex;
    align-items: center;
    grid-gap: 24px;
    & h2{
         color: ${({theme})=>theme.color.gray_black};
        font-family: ${({theme})=>theme.fontFamily.IntegralCFBold};
        font-size: ${({theme})=>theme.fontSize.h1_font_size};
        margin: 0 0 8px 0;

        @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
            font-size: ${({theme})=>theme.fontSize.h3_font_size};
        }
    }
    & span{
         color: ${({theme})=>theme.color.gray_80};
        font-size: ${({theme})=>theme.fontSize.h5_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_26_04};
        
    }

    
        & div{
            @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}){
                flex:1;

            & svg{
                margin: 10px 0 0 0;
            }
            }
            
        }
    

`