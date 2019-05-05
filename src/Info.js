import React, { Component } from "react";

let BGCOLOR = "#ffe8ce";

class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
          text: ["WELCOME TO OUR GRAND OPENING!", "$30 OFF ORDERS $100 OR MORE"],
          text2: ["Enter code LEVESTON  for the Offer"]  
        };
    }
    render() {
        let infoContainerStyle = {
            backgroundColor: BGCOLOR,
            width: "auto",
            height: 70,
            padding: 5,
            marginTop: 35,
            textAlign: "center",
            clear: "both"
        }
        let infoTextStyle = {
            marginTop: 10,
            marginRight: "3%",
            marginBottom: 0,
            color: "black",
            fontFamily: "Arial, sans-serif"
        }
        let infoText2Style = {
            marginTop: 0,
            marginRight: "3%",
            marginBottom: 0,
            color: "black",
            fontFamily: "Arial, sans-serif"
        }
        return(
            <div style={ infoContainerStyle }>
                <p style={ infoTextStyle }>{ this.state.text[1] }</p>
                <p style={ infoText2Style }>{ this.state.text2[0] }</p>
            </div>
        );
    }
}
export default Info;