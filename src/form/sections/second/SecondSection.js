import React, {Component} from 'react';
import StudentWhoDidNotResitAYear from "./StudentWhoDidNotResitAYear";
import StudentWhoDidResitAYear from "./StudentWhoDidResitAYear";
import "../../css/Button.css"
import "../../css/TextField.css"
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";


class SecondSection extends Component {
    state = {
        firstAnimationEndedForNext: false,
        secondAnimationEndedForNext: false,

        firstAnimationEndedForPrev: false,
        secondAnimationEndedForPrev: false,

        mouseInFirstButton: null,
        mouseInSecondButton: null
    };

    loadSectionDependingOnWhatWasSelectedInPrevious = () => {
        if (this.props.didStudentResitAYear === false) {
            return (
                <StudentWhoDidNotResitAYear
                    update={this.props.update}
                    courseFourYearsLong={this.props.courseFourYearsLong}
                    startingYear={this.props.startingYear}
                    firstYearTuition={this.props.firstYearTuition}
                    firstYearMaintenance={this.props.firstYearMaintenance}
                    secondYearTuition={this.props.secondYearTuition}
                    secondYearMaintenance={this.props.secondYearMaintenance}
                    thirdYearTuition={this.props.thirdYearTuition}
                    thirdYearMaintenance={this.props.thirdYearMaintenance}
                    finalYearTuition={this.props.finalYearTuition}
                    finalYearMaintenance={this.props.finalYearMaintenance} />
            );
        } else {
            return (
                <StudentWhoDidResitAYear/>
            );
        }
    };

    animationForFirstButton = null;
    animationForSecondButton = null;

    handleAnimationEnd = (event, buttonName) => {
        if (buttonName === "next") {
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
            primary: {main: '#000000'}, // Purple and green play nicely together.
        },
        typography: {useNextVariants: true},
    });

    render() {
        this.setAnimationState();
        return (
            <>
                <MuiThemeProvider theme={this.theme}>
                {this.loadSectionDependingOnWhatWasSelectedInPrevious()}
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
                            onAnimationEnd={(event) => this.handleAnimationEnd(event, "next")}>Next</label>
                    </div>
                </div>
            </>
        );

    }
}

export default SecondSection;