import styled from "styled-components";


export const FeaturedWrapper = styled.div`
    background: ${({theme})=>theme.color.bg_rgba};
    padding: 65px 0 100px 0;

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        padding: 60px 0;
    }

    & h4{
        padding: 0 0 55px 0;

        @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
            text-align: center;
        }
    }
`

export const FeturedInner = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px;

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}){
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        grid-template-columns: repeat(1,1fr);
    }
`
export const FeturedInnerItem = styled.div`
    & .content{
        display: flex;
        grid-gap: 10px;

        & .content_img{
            max-width: 266px;
            width: 100%;
            min-height: 272px;
            object-fit: cover;
            border-radius: 11px;
        }
    }
    & .author{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        & h5{
            padding: 30px 0 10px 0;
        }

        & .author_profile{
            display: flex;
            align-items: center;
            grid-gap: 10px;

            & h6{
                color: ${({theme})=>theme.color.black};
                font-size: ${({theme})=>theme.fontSize.body3_font_size};
                font-weight: ${({theme})=>theme.fontWeight.fw_500};
                line-height: ${({theme})=>theme.lineHeight.lh_18_23};
            }

            & img{
                width: 28px;
                height: 28px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }

`
