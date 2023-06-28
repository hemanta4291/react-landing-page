import styled from "styled-components";

export const AmazingWrapper = styled.div`
    background: ${({theme})=>theme.color.bg_rgba};
    padding: 106px 0 113px 0;

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
        padding: 60px 0;
    }

    
`


export const FlexAmazingContainer = styled.div`
    display: flex;
    align-items: ${({alignitem})=> alignitem? alignitem : "center"};
    justify-content: ${({justify})=> justify? justify : "space-between"};
    grid-gap: ${({gap})=> gap? gap : ""};

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}){
        flex-direction: column;
    }
`

export const AmazingLeft = styled.div`
    flex-basis: 40%;


    & h3 {
        font-size: ${({theme})=>theme.fontSize.h4_font_size};
    }
     /* responsive */
     @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}){
        flex-basis: 100%;
        width: 100%;
    }
`


export const AmazingRight = styled.div`
    display: flex;
    flex-basis: 60%;
    grid-gap: 56px;
    justify-content: space-between;
    align-items: center;



    & .amazing_inner{
        display: flex;
        grid-gap: 16px;

        
    }
    & .amazing_content  {
        h5{
            color: ${({theme})=>theme.color.black};
            font-size: ${({theme})=>theme.fontSize.h5_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_700};
            line-height: ${({theme})=>theme.lineHeight.lh_26_4};
            margin: 0 0 12px 0;
        }

        & p{
            color: ${({theme})=>theme.color.black};
            font-size: ${({theme})=>theme.fontSize.body3_font_size};
            font-weight: ${({theme})=>theme.fontWeight.fw_400};
            line-height: ${({theme})=>theme.lineHeight.lh_22_4};
        }
    }
    
    @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}){
        flex-direction: column;
    }
   

`

