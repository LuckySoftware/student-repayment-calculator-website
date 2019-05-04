import React, {Component} from 'react';
import "../../css/Button.css"
import "../../css/TextField.css"
import TextField from '@material-ui/core/TextField';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const test = {
    color:"blue"
};

const styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
};

class ForthSection extends Component {
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
        if (buttonName === "home") {
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
            root: {main: '#000000'},
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
                            <h1>Total amount paid:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-bare"
                                margin="normal"
                                variant="outlined"
                                disabled
                                defaultValue={this.props.result["totalAmountPaid"]}
                            />

                            <h1>Remaining debt:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-bare"
                                margin="normal"
                                variant="outlined"
                                disabled
                                defaultValue={this.props.result["remainingAmountOfStudentLoan"]}
                            />

                            <h1>Total amount of years spent paying:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-bare"
                                margin="normal"
                                variant="outlined"
                                disabled
                                defaultValue={this.props.result["totalAmountOfYearsSpentPayingStudentLoan"]}
                            />

                            <h1>Total amount of months spent paying:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-bare"
                                margin="normal"
                                variant="outlined"
                                disabled
                                defaultValue={this.props.result["totalAmountOfMonthsSpentPayingStudentLoan"]}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>

                <div className="buttonContainer">
                    <div className="buttonDiv">
                        <input type="button"/>
                        <label
                            onClick={this.props.backToStart}
                            onMouseEnter={() => this.setState({"mouseInFirstButton": true})}
                            onMouseLeave={() => this.setState({"mouseInFirstButton": false})}
                            className={["button", this.animationForFirstButton].join(" ")}
                            onAnimationEnd={(event) => this.handleAnimationEnd(event, "home")}>Back to start</label>
                    </div>
                </div>
            </>
        );

    }
}

export default ForthSection;