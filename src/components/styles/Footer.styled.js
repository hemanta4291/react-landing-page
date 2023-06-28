import styled from "styled-components";



export const FooterWrapper = styled.footer`
    background: ${({theme})=>theme.color.white};
    padding: 80px 0 24px 0;
`


export const FooterContainer = styled.div`
    display: flex;
    grid-gap: 92px;

    & h6{
        color: ${({theme})=>theme.color.black};
        font-size: ${({theme})=>theme.fontSize.body2_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_700};
        line-height: ${({theme})=>theme.lineHeight.lh_23_44};
        margin: 0 0 24px 0;
    }

    & ul.footer_link{
        & li{
            color: ${({theme})=>theme.color.gray_89};
            font-size: ${({theme})=>theme.fontSize.body3_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_600};
            line-height: ${({theme})=>theme.lineHeight.lh_28};
            
            & a{
                color: ${({theme})=>theme.color.gray_89};
                transition: all linear 0.3s;

                &:hover{
                    color: ${({theme})=>theme.color.secondary_dark};
                }
            }
        }
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 32px;
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}) {
        grid-template-columns: repeat(2,1fr);
        grid-gap: 24px;
    }
    @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}) {
        grid-template-columns: repeat(1,1fr);
        grid-gap: 16px;
    }
`
export const FooterLeft = styled.div`
    flex: 1;

    & p{
        padding: 28px 0 32px 0;
        color: ${({theme})=>theme.color.gray_80};
        font-size: ${({theme})=>theme.fontSize.body33_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_22_4};
    }
    & .social{
        display: flex;
        align-items: center;
        grid-gap: 16px;

        & li a{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid;
            transition: all linear 0.3s;

            & svg path{
                transition: all linear 0.4s;
            }
        }
        & a.facebook{
            background: ${({theme})=>theme.color.fb_color};
            border-color: ${({theme})=>theme.color.fb_color};

            &:hover{
                background: transparent;
            }
            &:hover svg path{
                fill:${({theme})=>theme.color.fb_color}
            }

        }
        & a.twitter{
            background: ${({theme})=>theme.color.tw_color};
            border-color: ${({theme})=>theme.color.tw_color};
            
            &:hover{
                background: transparent;
            }
            &:hover svg path{
                fill:${({theme})=>theme.color.tw_color}
            }
        }
        & a.linkdin{
            background: ${({theme})=>theme.color.in_color};
            border-color: ${({theme})=>theme.color.in_color};
            
            &:hover{
                background: transparent;
            }

            &:hover svg path{
                fill:${({theme})=>theme.color.in_color}
            }
        }
    }
`
export const FooterMiddle1 = styled.div`
    flex-basis: 113px;
    flex-shrink: 0;
`
export const FooterMiddle2 = styled.div`
    flex-basis: 113px;
    flex-shrink: 0;
`
export const FooterRight = styled.div`
    flex: 1;

    & p{
        padding: 0 0 24px 0;
        color: ${({theme})=>theme.color.gray_80};
        font-size: ${({theme})=>theme.fontSize.body33_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_22_4};
    }

    & .subscriber{
        position: relative;
        & input{
            border: 1px solid ${({theme})=>theme.color.gray_10};
            border-radius: 100px;
            height: 60px;
            width: 364px;
            padding: 0 30px;
            color: ${({theme})=>theme.color.gray_35};
            font-size:${({theme})=>theme.fontSize.body4_font_size} ;
            line-height:${({theme})=>(theme.lineHeight.lh_20_83)} ;
            letter-spacing:${({theme})=>(theme.letterSpacing.ls_04)};

            &:focus{
                outline: 0;
            }

            &::placeholder{
                color: ${({theme})=>theme.color.gray_35};
                font-size:${({theme})=>theme.fontSize.body4_font_size} ;
                line-height:${({theme})=>(theme.lineHeight.lh_16)} ;
            }

            @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}) {
                width: 100%;
                max-width: 364px;
            }
        }
        
        & button{
            position: absolute;
            right: 7px;
            top: 7px;
            background: ${({theme})=>theme.color.secondary_dark};
            border: 1px solid ${({theme})=>theme.color.secondary_dark};
            color: ${({theme})=>theme.color.white};
            font-size: ${({theme})=>theme.fontSize.body4_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_400};
            letter-spacing: ${({theme})=>theme.letterSpacing.ls_065};
            border-radius: 60px;
            padding: 15px 27px;
            cursor: pointer;
            flex-shrink: 0;
            transition: all linear 0.3s;

            &:hover{
                background: transparent;
                /* border: 1px solid ${({theme})=>theme.color.secondary_dark}; */
                color: ${({theme})=>theme.color.secondary_dark};
            }
        }
    }
`


export const FooterCopyWrite = styled.div`
    text-align: center;
    border-top: 1px solid ${({theme})=>theme.color.gray_3};;
    margin: 70px 0 0 0;

    & p{
        padding: 15px 0 0 0;
        color: ${({theme})=>theme.color.gray_30};
        font-size: ${({theme})=>theme.fontSize.body33_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_400};
        line-height: ${({theme})=>theme.lineHeight.lh_22_4};
    }
`



