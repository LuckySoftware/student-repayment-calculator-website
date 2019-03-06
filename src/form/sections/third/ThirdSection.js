import React, {Component} from 'react';
import "../../css/Button.css"
import "../../css/TextField.css"
import TextField from '@material-ui/core/TextField';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";


class ThirdSection extends Component {
    state = {
        firstAnimationEndedForNext: false,
        secondAnimationEndedForNext: false,

        firstAnimationEndedForPrev: false,
        secondAnimationEndedForPrev: false,

        mouseInFirstButton: null,
        mouseInSecondButton: null
    };

    animationForFirstButton = null;
    animationForSecondButton = null;

    handleAnimationEnd = (event, buttonName) => {
        if (buttonName === "submit") {
            if (event.animationName === "onMouseEnterAnimation") {
                this.setState({"firstAnimationEndedForNext": true})
            }

            if (event.animationName === "onMouseLeaveAnimation") {
                this.setState({"secondAnimationEndedForNext": true})
            }
        }

        if (buttonName === "previous") {
            if (event.animationName === "onMouseEnterAnimation") {
                this.setState({"firstAnimationEndedForPrev": true})
            }

            if (event.animationName === "onMouseLeaveAnimation") {
                this.setState({"secondAnimationEndedForPrev": true})
            }
        }
    };

    setAnimationState = () => {
        if (this.state.mouseInFirstButton != null) {
            switch (this.state.firstAnimationEndedForNext) {
                case true:
                    if (this.state.secondAnimationEndedForNext === true) {
                        this.setState({"firstAnimationEndedForNext": false});
                        this.setState({"secondAnimationEndedForNext": false})
                    } else if (this.state.mouseInFirstButton === false) {
                        this.animationForFirstButton = "slideOutToRight";
                    }
                    break;

                case false:
                    if (this.state.secondAnimationEndedForNext === false
                        && this.animation !== "slideInFromLeft"
                        && this.state.mouseInFirstButton === true) {
                        this.animationForFirstButton = "slideInFromLeft";
                    }
                    break;
                default:
            }
        }

        if (this.state.mouseInSecondButton != null) {
            switch (this.state.firstAnimationEndedForPrev) {
                case true:
                    if (this.state.secondAnimationEndedForPrev === true) {
                        this.setState({"firstAnimationEndedForPrev": false});
                        this.setState({"secondAnimationEndedForPrev": false})
                    } else if (this.state.mouseInSecondButton === false) {
                        this.animationForSecondButton = "slideOutToRight";
                    }
                    break;

                case false:
                    if (this.state.secondAnimationEndedForPrev === false
                        && this.animation !== "slideInFromLeft"
                        && this.state.mouseInSecondButton === true) {
                        this.animationForSecondButton = "slideInFromLeft";
                    }
                    break;
                default:
            }
        }
    };

    theme = () => createMuiTheme({
        palette: {
            primary: {main: '#000000'},
        },
        typography: {useNextVariants: true},
    });

    render() {
        this.setAnimationState();
        return (
            <>
                <MuiThemeProvider theme={this.theme}>
                    <div className="wrapper">
                        <div className="columnTwo">
                            <h1>Yearly income:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-required"
                                label="Yearly income"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.props.update("yearlyIncome", e.target.value)}
                                defaultValue={this.props.yearlyIncome}
                            />

                            <h1>Yearly raise:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-required"
                                label="Yearly raise"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.props.update("yearlyRaise", e.target.value)}
                                defaultValue={this.props.yearlyRaise}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>

                <div className="buttonContainer">
                    <div className="buttonDiv">
                        <input type="button"/>
                        <label
                            onClick={this.props.prev}
                            onMouseEnter={() => this.setState({"mouseInSecondButton": true})}
                            onMouseLeave={() => this.setState({"mouseInSecondButton": false})}
                            className={["button", this.animationForSecondButton].join(" ")}
                            onAnimationEnd={(event) => this.handleAnimationEnd(event, "previous")}>Previous</label>
                    </div>

                    <div className="buttonDiv">
                        <input type="button"/>
                        <label
                            onClick={this.props.next}
                            onMouseEnter={() => this.setState({"mouseInFirstButton": true})}
                            onMouseLeave={() => this.setState({"mouseInFirstButton": false})}
                            className={["button", this.animationForFirstButton].join(" ")}
                            onAnimationEnd={(event) => this.handleAnimationEnd(event, "submit")}>Submit</label>
                    </div>
                </div>
            </>
        );

    }
}

export default ThirdSection;