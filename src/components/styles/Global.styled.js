import {createGlobalStyle} from "styled-components";
import FontIntegralCFBold from './fonts/integral-cf/integralcf-bold.otf'


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300;1,700&display=swap');

@font-face {
    font-family: ${({theme})=>theme.fontFamily.IntegralCFBold};
    src:url(${FontIntegralCFBold});
    font-weight: bold;
}

body{
    font-family: ${({theme})=>theme.fontFamily.dm_snas};
    font-weight: ${({theme})=>theme.fontWeight.fw_400};
    line-height: ${({theme})=>theme.lineHeight.lh_22_4};
    /* letter-spacing: ${({theme})=>theme.letterSpacing.ls_05}; */
    background: ${({theme})=>theme.color.white};
}

h1{
    color: ${({theme})=>theme.color.black};
    font-size: ${({theme})=>theme.fontSize.h1_font_size};
    font-family: ${({theme})=>theme.fontFamily.IntegralCFBold};
    font-weight: ${({theme})=>theme.fontWeight.fw_400};
    line-height: ${({theme})=>theme.lineHeight.lh_48};
    letter-spacing: ${({theme})=>theme.letterSpacing.ls_05};
    
    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        font-size: ${({theme})=>theme.fontSize.h3_font_size};
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        font-size: ${({theme})=>theme.fontSize.h4_font_size};
    }
}
h3{
    color: ${({theme})=>theme.color.black};
    font-size: ${({theme})=>theme.fontSize.h2_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    line-height: ${({theme})=>theme.lineHeight.lh_40};
    font-family: ${({theme})=>theme.fontFamily.IntegralCFBold};
    text-transform: uppercase;
    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        font-size: ${({theme})=>theme.fontSize.h3_font_size};
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        font-size: ${({theme})=>theme.fontSize.h4_font_size};
    }
}
h4{
    color: ${({theme})=>theme.color.black};
    font-size: ${({theme})=>theme.fontSize.h4_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    line-height: ${({theme})=>theme.lineHeight.lh_33_6};
    font-family: ${({theme})=>theme.fontFamily.IntegralCFBold};
    text-transform: uppercase;
    @media only screen and (max-width: ${({theme})=>theme.breakPoint.tab}) {
        font-size: ${({theme})=>theme.fontSize.h5_font_size};
    }
}

h5{
    color: ${({theme})=>theme.color.black};
    font-size: ${({theme})=>theme.fontSize.h5_font_size};
    font-weight: ${({theme})=>theme.fontWeight.fw_700};
    line-height: ${({theme})=>theme.lineHeight.lh_26};
}

ol,
ul {
    list-style: none;
    margin-bottom: 0 !important;
}

a,
a:hover,
a:focus {
    text-decoration: none;
    outline: 0;
}

`

export default GlobalStyle;