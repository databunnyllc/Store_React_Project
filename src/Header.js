import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import TopNavigation from "./TopNavigation.js";
import Info from "./Info.js";

/* Color Pallett Variables*/
let Brown = "#8c6239";
let Black = "#362f2d";
let LightBrown = "#e4cebe";
let LightGrey = "#e0e0e0";

class Header extends Component {
    render() {
        let topNavContainerStyle = {
            padding: 5,
            textAlign: "center",
            borderBottom: "1px solid #e0e0e0"
        }
        let titleContainerStyle = {
            marginTop: 0,
            marginBottom: 0
        }
        let titleTextStyle = {
            color: Black,
            fontFamily: "acumin-pro-condensed, sans-serif",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: 30,
            marginTop: 0,
            marginBottom: 0,
            position: "relative",
            left: "30px",
            display: "inline-block"
        }
        let titleSpanStyle = {
            color: Brown
        }
        let bottomNavContainerStyle = {
            margin: 0
        }
        let siteLogoContainerStyle = {
            display: "inline-block",
            float: "left"
        }
        let siteLogoImgStyle = {
            width: 120
        }

        return (
        <div>
            <section className="TopNavContainer" style={ topNavContainerStyle }>
                <div id="title" style={ titleTextStyle }>
                    <h1 style={ titleContainerStyle }>Leveston<span style={ titleSpanStyle }>Designs</span></h1>
                </div>
                <TopNavigation />
            </section>


            <section className="BottomNavContainer" style={bottomNavContainerStyle}>
                <div id="logo" style={ siteLogoContainerStyle }>
                    <img style={ siteLogoImgStyle } src={require("./graphics/Leveston-DesignsLOGO.png")}/>
                </div>
                <SearchBar />
                <Info />
            </section>
        </div>
        );
    }
}

export default Header;