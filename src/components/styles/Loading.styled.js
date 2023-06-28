import styled from "styled-components";

export const LoadingWrapper = styled.div`
    /* position: absolute; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({theme})=>theme.color.white};
    color: ${({theme})=>theme.color.black};
    font-family: ${({theme})=>theme.fontFamily.IntegralCFBold};
    font-weight: ${({theme})=>theme.fontWeight.fw_400};
    line-height: ${({theme})=>theme.lineHeight.lh_48};
    letter-spacing: ${({theme})=>theme.letterSpacing.ls_05};
    height: ${({height})=>height? height: ''};

    & .loading_img img{
        width:  ${({img_width})=>img_width? img_width: '150px'};
    }
    & .loading_text{
        font-size: ${({font_size})=>font_size? font_size: '30px'};;
    }

` 