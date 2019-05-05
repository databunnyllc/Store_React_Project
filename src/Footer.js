import React, { Component } from "react";

class Footer extends Component {
    render() {
        let footerDivStyle = {
            backgroundColor: "#362f2d",
            color: "white",
            position: "absolute",
            left: 0,
            right: 0,
            marginTop: 30,
            padding: "40px 350px 40px 350px"
        }
        let listStyle = {
            listStyleType: "none",
            marginTop: 10,
            marginRight: 100
        }
        let mainListsDiv = {
            display: "inline-block",
            marginRight: 20,
            marginTop: 10
        }
        let unorderedListStyle = {
            marginBottom: 0
        }
        let socialLinkDivStyle = {
            float: "right"
        }
        let socialListStyle = {
            display: "inline-block",
            marginRight: 10
        }
        let socialIcons = {
            width: 25
        }
        return(
            <section style={ footerDivStyle }>
                <div style={ mainListsDiv }>
                    <ul style={ unorderedListStyle }>
                        <li style={ listStyle }><a href="#">STUDENT DISCOUNT</a></li>
                        <li style={ listStyle }><a href="#">MILITARY DISCOUNT</a></li>
                        <li style={ listStyle }><a href="#">SIGN UP FOR EMAIL</a></li>
                        <li style={ listStyle }><a href="#">SITE FEEDBACK</a></li>
                    </ul>
                </div>
                <div style={ mainListsDiv }>
                    <ul style={ unorderedListStyle }>
                        <li style={ listStyle }><a href="#">GET HELP</a></li>
                        <li style={ listStyle }><a href="#">Order Status</a></li>
                        <li style={ listStyle }><a href="#">Returns</a></li>
                        <li style={ listStyle }><a href="#">Payment Options</a></li>
                        <li style={ listStyle }><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div style={ mainListsDiv } style={ socialLinkDivStyle }>
                    <li style={ listStyle } style={ socialListStyle }><a href="#"><img style={ socialIcons } src={ require("./graphics/facebookIcon.png") } /></a></li>
                    <li style={ listStyle } style={ socialListStyle }><a href="#"><img style={ socialIcons } src={ require("./graphics/instagramIcon.png") } /></a></li>
                    <li style={ listStyle } style={ socialListStyle }><a href="#"><img style={ socialIcons } src={ require("./graphics/twitterIcon.png")} /></a></li>
                </div>
            </section>
        );
    }
}
export default Footer;