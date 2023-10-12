import React from 'react';
import {ReactNavbar} from "overlay-navbar";

const options = {
  burgerColor : "white",
    burgerColorHover : "burgerColor",
    navColor1 : "#a70000",
    navColor2 : "#a70000",
    navColor3 : "#a70000",
    navColor4 : "#a70000",
    logo : "logo_cafe.png",
    logoWidth : "100px",
    logoHeight : "100px",
    logoHoverSize : "15px",
    logoHoverColor : "green"  ,
    //logoTransition : {0.5},
    //logoAnimationTime : {1},
    nav1FlexDirection : "row"   ,
    nav2FlexDirection : "row",
    nav3FlexDirection : "row"  , 
    nav4FlexDirection : "row",
    nav1alignItems : "center",
    nav2alignItems : "center",
    nav3alignItems : "center",
    nav4alignItems : "center",
    nav1justifyContent : "center",
    nav2justifyContent : "space-around",
    nav3justifyContent : "space-around",
    nav4justifyContent : "space-around",
    //nav1Transition : {0.4},
    //nav2Transition : {0.4},
    //nav3Transition : {0.4},
    //nav4Transition : {0.4},

    link1Text : "About",
    link2Text : "Menu",
    link3Text : "Gallery",
    link4Text : "Contact Us",
    link1Url : "/About",
    link2Url : "/Menu",
    link3Url : "/Gallery",
    link4Url : "/Contact",
    link1Size : "1.5vmax",
    link2Size : "1.5vmax",
    link3Size : "1.5vmax",
    link4Size : "1.5vmax",
    link1Family : "sans-serif",
    link2Family : "sans-serif",
    link3Family : "sans-serif",
    link4Family : "sans-serif",
    link1Color : "white"   , 
    link2Color : "white ",
    link3Color : "white "  ,
    link4Color : "white ",
    link1BackgroundColor : "unset",
    link2BackgroundColor : "unset",
    link3BackgroundColor : "unset",
    link4BackgroundColor : "unset",
    link1ColorHover : "#ff6a6a",
    link2ColorHover : "#ff6a6a",
    link3ColorHover : "#ff6a6a",
    link4ColorHover : "#ff6a6a",
    link1Decoration : "none",
    link2Decoration : "none",
    link3Decoration : "none",
    link4Decoration : "none",
    //SearchIconElement: "no default value, **required**",
    //cartIcon : {true}
    //CartIconElement: "no default value, **required**",
    //profileIcon : {true}
    //ProfileIconElement: "no default value, **required**",
    profileIconUrl : "/account",
    searchIconColor : "white",
    cartIconColor : "white",
    cartIconSize : "100px",
    profileIconColor : "white",
    
}


function Header() {
  return (
    <ReactNavbar {...options} />
  )
}

export default Header