import React, {Component} from 'react';
import "./FirstSection.css";
import "../../css/Button.css"

class FirstSection extends Component {
    state = {
        firstAnimationEnded: false,
        secondAnimationEnded: false,
        mouseInButton: null,
    };

    animation = null;

    handleAnimationEnd = (event) => {
        if (event.animationName === "onMouseEnterAnimation") {
            this.setState({"firstAnimationEnded": true})
        }

        if (event.animationName === "onMouseLeaveAnimation") {
            this.setState({"secondAnimationEnded": true})
        }

    };

    setAnimationState = () => {
        if (this.state.mouseInButton != null) {
            switch (this.state.firstAnimationEnded) {
                case true:
                    if (this.state.secondAnimationEnded === true) {
                        this.setState({"firstAnimationEnded": false});
                        this.setState({"secondAnimationEnded": false})
                    } else if (this.state.mouseInButton === false) {
                        this.animation = "slideOutToRight";
                    }
                    break;

                case false:
                    if (this.state.secondAnimationEnded === false
                        && this.animation !== "slideInFromLeft"
                        && this.state.mouseInButton === true) {
                        this.animation = "slideInFromLeft";
                    }
                    break;
                default:
            }
        }

    };

    wasCourseFourYearsLongForm = () => {
        if (this.props.didStudentResitAYear !== true) {
            return (
                <>
                    <fieldset>
                        <legend>Was your course four years long?</legend>
                        <div className="radioButtons">
                            <input type="radio"
                                   name="wasCourseFourYearsLong"
                                   value="true"
                                   id="firstRadioBox"
                                   defaultChecked={this.props.courseFourYearsLong}/>
                            <label
                                onClick={() => this.props.update("courseFourYearsLong", true)}
                                htmlFor="firstRadioBox">Yes</label>

                            <input type="radio"
                                   name="wasCourseFourYearsLong"
                                   value="false"
                                   id="secondRadioBox"
                                   defaultChecked={!this.props.courseFourYearsLong}/>
                            <label
                                onClick={() => this.props.update("courseFourYearsLong", false)}
                                htmlFor="secondRadioBox">No</label>
                        </div>
                    </fieldset>
                </>
            )
        }
    };

    render() {
        this.setAnimationState();
        return (
            <>
                <br/>
                <fieldset>
                    <legend>Did you resit a year?</legend>
                    <div className="radioButtons">
                        <input type="radio"
                               name="didStudentResitAYear"
                               value="true"
                               id="thirdRadioBox"
                               defaultChecked={this.props.didStudentResitAYear}/>
                        <label
                            onClick={() => this.props.update("didStudentResitAYear", true)}
                            htmlFor="thirdRadioBox">Yes</label>

                        <input type="radio"
                               name="didStudentResitAYear"
                               value="false"
                               id="forthRadioBox"
                               defaultChecked={!this.props.didStudentResitAYear}/>
                        <label
                            onClick={() => this.props.update("didStudentResitAYear", false)}
                            htmlFor="forthRadioBox">No</label>
                    </div>
                </fieldset>
                <br/>

                {this.wasCourseFourYearsLongForm()}
                <div className="buttonContainer">
                    <div className="buttonDiv">
                        <input type="button"/>
                        <label
                            onClick={this.props.next}
                            onMouseEnter={() => this.setState({"mouseInButton": true})}
                            onMouseLeave={() => this.setState({"mouseInButton": false})}
                            className={["button", this.animation].join(" ")}
                            onAnimationEnd={this.handleAnimationEnd}>Next</label>
                    </div>
                </div>
            </>
        )
    }
}

export default FirstSection;
