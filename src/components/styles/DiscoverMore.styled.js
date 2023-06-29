import styled from "styled-components";


export const DiscoverMoreWrapper = styled.div`
    background: ${({theme})=>theme.color.bg_rgba};
    padding: 65px 0 47px 0;

    & h3{
        margin: 0 0 38px 0;
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        padding: 60px 0;
    }
`

export const FilterTabMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}){
        flex-wrap: wrap;
        grid-gap: 20px;
    }

    & ul{
        display: flex;
        align-items: center;
        grid-gap: 12px;

        @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
            flex-wrap: wrap;
            grid-gap: 20px;
        }

        & li{
            background: ${({theme})=>theme.color.btn_rgba};
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 100px;
            color: ${({theme})=>theme.color.black};
            font-size: ${({theme})=>theme.fontSize.body3_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_500};
            line-height: ${({theme})=>theme.lineHeight.lh_17};
            transition: all linear 0.3s;

            &:hover{
                background: ${({theme})=>theme.color.primary};
                color: ${({theme})=>theme.color.white};
            }
        }
        & li.active{
            background: ${({theme})=>theme.color.primary};
            color: ${({theme})=>theme.color.white};
        }
    }

    & .filter{
        display: flex;
        align-items: center;
        grid-gap: 10px;
        background: ${({theme})=>theme.color.btn_rgba};
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 100px;
        color: ${({theme})=>theme.color.black};
        font-size: ${({theme})=>theme.fontSize.body3_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_500};
        line-height: ${({theme})=>theme.lineHeight.lh_17};

        & span{
            display: inline-flex;
        }
    }
`



// Discover List

export const DiscoverNtfsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 40px;
    margin: 32px 0 0 0;

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}){
        grid-template-columns: repeat(2,1fr); 
    }
    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        grid-template-columns: repeat(1,1fr); 
    }
`
export const DiscoverNtfsListItem = styled.div`
    background: ${({theme})=>theme.color.white};
    border-radius: 13.16px;
    padding: 10px;
    border: 1px solid ${({theme})=>theme.color.bg_rgba};

    & .top_box{
        position: relative;
        margin: 0 0 20px 0;

        & .top_large_img{
            width: 100%;
        }

        & .subscribers{
            position: absolute;
            bottom: -7px;
            left: 26px;
            display: flex;

            & img{
                margin: 0 0 0 -9px;
                width: 30px;
                height: 30px;
                /* border: 2px solid ${({theme})=>theme.color.white}; */
                border-radius: 50%;
                cursor: pointer;
            }
        }
    }
    & .bottom{
        padding: 0 12px;
    }
    & .title{
        margin: 0 0 10px 0;
    }
    & .middle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 20px 0;
        margin: 0 0 10px 0;
        border-bottom: 1px solid ${({theme})=>theme.color.gray_3};

        & .middle_left{
            display: flex;
            align-items: center;
            grid-gap: 7px;

            & span{
                color: ${({theme})=>theme.color.green};
                font-size: ${({theme})=>theme.fontSize.body5_font_size};
                font-weight: ${({theme})=>theme.fontWeight.fw_700};
                line-height: ${({theme})=>theme.lineHeight.lh_14_32};
            }
        }

        & .middle_right{
            color: ${({theme})=>theme.color.gray_40};
            font-size: ${({theme})=>theme.fontSize.body3_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_500};
            line-height: ${({theme})=>theme.lineHeight.lh_19_15};
        }
    }
    & .footer{
        display: flex;
        justify-content: space-between;
        align-items: center;

        & .f_date{
            padding: 4px 11px;
            background: ${({theme})=>theme.color.gray_20};
            color: ${({theme})=>theme.color.blue_light};
            font-size: ${({theme})=>theme.fontSize.body6_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_400};
            line-height: ${({theme})=>theme.lineHeight.lh_19_15};
            border-radius: 109px;

            & span{
                font-weight: ${({theme})=>theme.fontWeight.fw_700};
                
            }
        }

        h6{
            color: ${({theme})=>theme.color.blue_light1};
            font-size: ${({theme})=>theme.fontSize.body33_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_500};
            line-height: ${({theme})=>theme.lineHeight.lh_20};
            cursor:pointer;
        }
    }

`


export const LoadMoreBtnWrapper =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 55px 0 0 0;
`


