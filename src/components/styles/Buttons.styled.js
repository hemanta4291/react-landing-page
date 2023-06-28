import styled from "styled-components";

export const ButtonLargeContained = styled.button`
    background: ${({theme})=>theme.color.primary};
    border: 2px solid ${({theme})=>theme.color.primary};
    color: ${({theme})=>theme.color.white};
    font-size: ${({theme})=>theme.fontSize.h5_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_400};
    letter-spacing: ${({theme})=>theme.letterSpacing.ls_065};
    border-radius: 60px;
    padding: 20px 40px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all linear 0.3s;


    &:hover{
        background: ${({theme})=>theme.color.white};
        border-color: ${({theme})=>theme.color.primary};
        color: ${({theme})=>theme.color.primary};
    }

`

export const ButtonLargeOutline = styled.button`
    background: transparent;
    border: 2px solid ${({theme})=>theme.color.primary};
    color: ${({theme})=>theme.color.primary};
    font-size: ${({theme})=>theme.fontSize.h5_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_400};
    letter-spacing: ${({theme})=>theme.letterSpacing.ls_065};
    border-radius: 60px;
    padding: 20px 40px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all linear 0.3s;

    &:hover{
        background: ${({theme})=>theme.color.primary};
        border-color: ${({theme})=>theme.color.primary};
        color: ${({theme})=>theme.color.white};
    }

`


export const ButtonMediumContained = styled.button`
    background: ${({theme})=>theme.color.primary};
    border: 1px solid ${({theme})=>theme.color.primary};
    color: ${({theme})=>theme.color.white};
    font-size: ${({theme})=>theme.fontSize.body3_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    line-height: ${({theme})=>theme.lineHeight.lh_16};
    letter-spacing: ${({theme})=>theme.letterSpacing.ls_04};
    border-radius: 60px;
    padding: 15px 22px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all linear 0.3s;

    &:hover{
        background: ${({theme})=>theme.color.white};
        border-color: ${({theme})=>theme.color.primary};
        color: ${({theme})=>theme.color.primary};
    }

`

export const ButtonMediumOutline = styled.button`
    background: transparent;
    border: 2px solid ${({theme})=>theme.color.primary};
    color: ${({theme})=>theme.color.primary};
    font-size: ${({theme})=>theme.fontSize.body3_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    line-height: ${({theme})=>theme.lineHeight.lh_16};
    letter-spacing: ${({theme})=>theme.letterSpacing.ls_04};
    border-radius: 60px;
    padding: 15px 22px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all linear 0.3s;

    &:hover{
        background: ${({theme})=>theme.color.primary};
        border-color: ${({theme})=>theme.color.primary};
        color: ${({theme})=>theme.color.white};
    }
`


export const ButtonSmallContained = styled.button`
    background: ${({theme})=>theme.color.primary};
    border: 2px solid ${({theme})=>theme.color.primary};
    color: ${({theme})=>theme.color.white};
    font-size: ${({theme})=>theme.fontSize.body3_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    line-height: ${({theme})=>theme.lineHeight.lh_16};
    letter-spacing: ${({theme})=>theme.letterSpacing.ls_04};
    border-radius: 60px;
    padding: 14px 20px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all linear 0.3s;

    &:hover{
        background: ${({theme})=>theme.color.white};
        border-color: ${({theme})=>theme.color.primary};
        color: ${({theme})=>theme.color.primary};
    }

`

export const ButtonSmallOutline = styled.button`
    background: transparent;
    border: 2px solid ${({theme})=>theme.color.primary};
    color: ${({theme})=>theme.color.primary};
    font-size: ${({theme})=>theme.fontSize.body3_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    line-height: ${({theme})=>theme.lineHeight.lh_16};
    letter-spacing: ${({theme})=>theme.letterSpacing.ls_04};
    border-radius: 60px;
    padding: 14px 20px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all linear 0.3s;

    &:hover{
        background: ${({theme})=>theme.color.primary};
        border-color: ${({theme})=>theme.color.primary};
        color: ${({theme})=>theme.color.white};
    }
`



export const ButtonExtraSmallContained = styled.button`
    background: ${({theme})=>theme.color.secondary_dark};
    border: 1px solid ${({theme})=>theme.color.primary};
    color: ${({theme})=>theme.color.white};
    font-size: ${({theme})=>theme.fontSize.body5_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    line-height: ${({theme})=>theme.lineHeight.lh_14};
    border-radius: 60px;
    padding: 10px 20px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all linear 0.3s;

`

export const ButtonExtraSmallOutline = styled.button`
    background: transparent;
    border: 2px solid ${({theme})=>theme.color.secondary_dark};
    color: ${({theme})=>theme.color.secondary_dark};
    font-size: ${({theme})=>theme.fontSize.body5_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    line-height: ${({theme})=>theme.lineHeight.lh_14};
    border-radius: 60px;
    padding: 14px 20px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all linear 0.3s;


    &:hover{
        background: ${({theme})=>theme.color.secondary_dark};
        border-color: ${({theme})=>theme.color.secondary_dark};
        color: ${({theme})=>theme.color.white};
    }

`