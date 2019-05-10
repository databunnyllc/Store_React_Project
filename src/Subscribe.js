import React, { Component } from "react";

class Subscribe extends Component {
    render() {
        let formDivStyle = {
            textAlign: "center"
        }
        let subInputStyle = {
            marginTop: 50,
            width: 300,
            backgroundColor: "#e4cebe",
            border: "1px solid black",
            borderRadius: 10,
            padding: 5,
            fontFamily: "IMPACT, sans-serif"
        }
        let subButtonStyle = {
            marginTop: 15,
            padding: 5,
            borderRadius: 20,
            border: "none",
            backgroundColor: "#362f2d", 
            color: "white",
            fontFamily: "IMPACT, sans-serif",
            fontSize: 40
        }
        return(
            <form style={ formDivStyle } action="./subscribe.php" method="POST">
                <input style={ subInputStyle } type="email" placeholder=" EMAIL" name="email" required></input><br/>
                <button style={ subButtonStyle } type="submit">Subscribe</button>
            </form>
        );
    }
}
export default Subscribe;