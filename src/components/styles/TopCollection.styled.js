import styled from "styled-components";

export const TopCollectionWrapper = styled.div`
    padding: 118px 0 134px 0;

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        padding: 60px 0;
    }

`


export const TopFlexContainer = styled.div`
    display: flex;
    align-items: ${({alignitem})=> alignitem? alignitem : "center"};
    justify-content: ${({justify})=> justify? justify : "space-between"};
    grid-gap: ${({gap})=> gap? gap : ""};

    @media only screen and (max-width: 1199px){
        flex-direction: column;
        /* align-items: center; */
/* 
        & >div:first-child{
            width: 100%;
        }
        & >div:not(:first-child){
           flex: 1;
        } */
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        flex-direction: column;
        align-items: center;
    }
`

export const TopCollectionLeft = styled.div`
    flex-basis:30%;

    @media only screen and (max-width: 1199px){
        width: 100%;
        flex-basis: 100%;
        & img.left_img{
            width: 100%;
        }
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        & img.left_img{
            width: 100%;
        }
    }

    
    
`
export const TopCollectionLeftInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0 0 0;
   
    & .top_left_inner1{
        display: flex;
        grid-gap: 5px;
        align-items: center;

        & img{
            height: 48px;
            width: 48px;
            object-fit: cover;
        }

        & {
            
            & h5{
                margin: 0 0 4px 0;
            }
            & span{
                font-size: ${({theme})=>theme.fontSize.body3_font_size};
                color:${({theme})=>theme.color.gray_85}
            }
        }
        
    }

    & .top_left_inner2{

        & .top_left_inner2_title{
            font-weight: ${({theme})=>theme.fontWeight.fw_500};
        }
        & .top_left_inner2_content{
            display: flex;
            align-items: center;
            grid-gap: 10px;
            margin: 4px 0 0 0;

            & span{
                display: inline-flex;
            }
            & h6{
                font-size: ${({theme})=>theme.fontSize.body1_font_size};
                color:${({theme})=>theme.color.gray_88};
                line-height: ${({theme})=>theme.lineHeight.lh_20_83};
            }
        }

    }
`
export const TopCollectionRightWrapper=styled.div`
    flex-basis: 70%;
    display: flex;
    grid-gap: 45px;

    @media only screen and (max-width: 1199px){
        width: 100%;
        flex-basis: 100%;
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        flex-direction: column;
    }
`

export const TopCollectionMiddle = styled.div`
    flex: 1;
    & .top_middle_item + .top_middle_item{
        margin-top: 40px;
    }
    & img{}

    & .top_middle_item{
        flex: 1;
        display: flex;
        grid-gap: 20px;
        align-items: center;

        @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}){
            & img{
                width: 36%;
            }
        }

    }
`
export const CollectionMiddle = styled.div`
    & .collection_inner{
        display: flex;
        align-items: center;
        grid-gap: 8px;
        padding: 8px 0 16px 0;
    & img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        object-fit: cover   ;
    }

    & .box{
        display: flex;
        align-items: center;
        grid-gap: 5px;
        border-radius: 6px;
        border: 1px solid ${({theme})=>theme.color.green};
        color:${({theme})=>theme.color.green};
        font-size: ${({theme})=>theme.fontSize.body4_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_700};
        padding: 5px 8px;
        flex-shrink: 0;

    }

    & .out_of{
        flex-shrink: 0;
        font-size: ${({theme})=>theme.fontSize.body3_font_size};
        color:${({theme})=>theme.color.gray_50};
    }
    
}
`

export const TopCollectionRight = styled.div`
    flex: 1;
    border-left: 1px solid ${({theme})=>theme.color.gray_5};
    padding-left: 34px;

    & .title{
        font-family: ${({theme})=>theme.fontFamily.IntegralCFBold};
        color: ${({theme})=>theme.color.black};
        font-size: ${({theme})=>theme.fontSize.h5_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_700};
        line-height: ${({theme})=>theme.lineHeight.lh_26};
    }
    
    & .sub_title{
        color: ${({theme})=>theme.color.primary};
        font-size: ${({theme})=>theme.fontSize.body2_font_size};
        font-weight: ${({theme})=>theme.fontWeight.fw_700};
        line-height: ${({theme})=>theme.lineHeight.lh_23_44};
        margin: 10px 0 32px 0;
    }
`

export const CollectionOverList = styled.div`

    & .over_list_item:last-child{
        border-bottom: 0;
    }
    & .over_list_item{
        display: flex;
        align-items: center;
        grid-gap: 24px;
        padding: 16px 0;
        border-bottom: 1px solid ${({theme})=>theme.color.gray_4};;

        & .count{
            color: ${({theme})=>theme.color.black};
            font-size: ${({theme})=>theme.fontSize.h3_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_700};
            line-height: ${({theme})=>theme.lineHeight.lh_20_83};
        }
        & .middle_left{
            position: relative;
            display: inline-flex;

            & .top_author{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                object-fit: cover;
                
            }

            & span{
                position: absolute;
                top: -9px;
                left: 31px;
                z-index: 9;
                display: inline-block;
            }
        }
        & .middle_right{
            & h6{
                color: ${({theme})=>theme.color.black};
                font-size: ${({theme})=>theme.fontSize.body1_font_size};
                font-weight: ${({theme})=>theme.fontWeight.fw_500};
                line-height: ${({theme})=>theme.lineHeight.lh_20_83};
                letter-spacing: ${({theme})=>theme.letterSpacing.ls_025};
                margin: 0 0 10px 0;
            }
            & .middle_right_inner{
                display: flex;
                align-items: center;
                grid-gap: 6px;

                & span{
                    display: inline-flex;
                    color: ${({theme})=>theme.color.black};
                    font-family: ${({theme})=>theme.fontFamily.Poppins};
                    font-size: ${({theme})=>theme.fontSize.body3_font_size};
                    font-weight: ${({theme})=>theme.fontWeight.fw_600};
                    line-height: ${({theme})=>theme.lineHeight.lh_14};
                    letter-spacing: ${({theme})=>theme.letterSpacing.ls_025};
                }
            }
        }
        & .percentage{
            color: ${({theme})=>theme.color.black};
            font-family: ${({theme})=>theme.fontFamily.Poppins};
            font-size: ${({theme})=>theme.fontSize.h5_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_600};
            line-height: ${({theme})=>theme.lineHeight.lh_20_83};
            letter-spacing: ${({theme})=>theme.letterSpacing.ls_025};
        }
        .active_class{
            color: ${({theme})=>theme.color.green};
        }
        .de_active_class{
            color: ${({theme})=>theme.color.red_80};
        }


        @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}){
            grid-gap: 20px;

            & .count{
                font-size: ${({theme})=>theme.fontSize.h4_font_size};
            }
            & .percentage{
                font-size: ${({theme})=>theme.fontSize.body3_font_size};
            }
            & .middle_left {
                .top_author{
                    width: 46px;
                    height: 46px;
                }
                & span img{
                    width: 30px;

                }
            }
        }
    }

`


