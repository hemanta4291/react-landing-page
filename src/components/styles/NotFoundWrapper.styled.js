import styled from "styled-components";

export const NotFoundWrapper = styled.div`
    height: calc(100vh - 47vh);
    background: ${({theme})=>theme.color.black};
    color: ${({theme})=>theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
`