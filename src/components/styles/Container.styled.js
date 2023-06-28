import styled from "styled-components";


export const Container = styled.div`
     width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
    @media only screen and (min-width: ${({theme})=>theme.breakPoint.large}){
        max-width: 1230px;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

`

export const FlexContainer = styled.div`
    display: flex;
    align-items: ${({alignItem})=> alignItem? alignItem : "center"};
    justify-content: ${({justify})=> justify? justify : "space-between"};
    grid-gap: ${({gap})=> gap? gap : ""};
`