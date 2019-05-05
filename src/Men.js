import React, { Component } from 'react';

class Men extends Component {
    render() {
        let tableTitleStyle = {
            color: "grey"
        }
        let tableStyle = {
            border: "1px solid grey",
            backgroundColor: "White",
            width: "100%"
        }
        let tableDataStyle = {
            border: "1px solid grey",
            padding: "5px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "30px"
        }
        let tableImages = {
            width: "300px"
        }

        return(
            <div>
                <h2 style={ tableTitleStyle }>MENS</h2>
                <table style= { tableStyle }>
                    <tr>
                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/BlissfullyLivingShirtMEN.PNG")}/>
                            <p>Blissfully Living</p>
                            <h4>$30.00</h4>
                        </td>

                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/LetsHaveABeerMENS.PNG")}/>
                            <p>Let's Have A Beer</p>
                            <h4>$30.00</h4>
                        </td>

                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/AllMight,AllPowerMENS.PNG")}/>
                            <p>All Might, All Power</p>
                            <h4>$30.00</h4>
                        </td>
                    </tr>

                    <tr>
                        <td style={ tableDataStyle } >
                            <img style={ tableImages } src={require("./images/IKeepItOneHundredMENS.PNG")}/>
                            <p>I Keep It One Hundred!!!</p>
                            <h4>$30.00</h4>
                        </td>

                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/AmaterasuMENS.PNG")}/>
                            <p>Amaterasu</p>
                            <h4>$30.00</h4>
                        </td>

                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/TheWorldIsMyCanvasMENS.PNG")}/>
                            <p>The World is My Canvas</p>
                            <h4>$30.00</h4>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Men;