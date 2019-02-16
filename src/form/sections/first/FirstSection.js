import React, {Component} from 'react';
import "./FirstSection.css";

class FirstSection extends Component {
    constructor(props) {
        super(props);
        this.animationClassToAdd = null;
    }

    state = {
        courseFourYearsLong: true,
        didStudentResitAYear: true,
        firstAnimationEnded: false,
        secondAnimationEnded: false,
        toggle: null,
    };

    entrance = null;

    handleAnimationEnd = (event) => {
        if (event.animationName === "testAnimation") {
            this.setState({"firstAnimationEnded": true})
        }

        if (event.animationName === "testAnimation2") {
            this.setState({"secondAnimationEnded": true})
        }

    };

    setAnimationState = () => {
        if (this.state.toggle != null) {
            switch (this.state.firstAnimationEnded) {
                case true:
                    if (this.state.secondAnimationEnded === true) {
                        this.setState({"firstAnimationEnded": false});
                        this.setState({"secondAnimationEnded": false})
                    } else if (this.state.toggle === false) {
                        this.entrance = "after";
                    }
                    break;

                case false:
                    if (this.state.secondAnimationEnded === false && this.entrance !== "before" && this.state.toggle === true) {
                        this.entrance = "before";
                    }
                    break;
                default:
            }
        }

    };

    wasCourseFourYearsLongForm = () => {
        if (this.state.didStudentResitAYear === true) {
            return null;
        } else {
            return (
                <>
                    <fieldset>
                        <legend>Was your course four years long?</legend>
                        <div className="radioButtons">
                            <input type="radio"
                                   name="wasCourseFourYearsLong"
                                   value="true"
                                   id="firstRadioBox"
                                   defaultChecked/>
                            <label
                                onClick={() => this.setState({"courseFourYearsLong": true})}
                                htmlFor="firstRadioBox">Yes</label>

                            <input type="radio"
                                   name="wasCourseFourYearsLong"
                                   value="false"
                                   id="test"/>
                            <label
                                onClick={() => this.setState({"courseFourYearsLong": false})}
                                htmlFor="test">No</label>
                        </div>
                    </fieldset>
                </>
            );
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
                               defaultChecked/>
                        <label
                            onClick={() =>
                                this.setState({
                                    "didStudentResitAYear": true,
                                })}
                            htmlFor="thirdRadioBox">Yes</label>

                        <input type="radio"
                               name="didStudentResitAYear"
                               value="false"
                               id="forthRadioBox"/>
                        <label
                            onClick={() => this.setState({"didStudentResitAYear": false})}
                            htmlFor="forthRadioBox">No</label>
                    </div>
                </fieldset>
                <br/>

                {this.wasCourseFourYearsLongForm()}
                <div className="buttonContainer">
                    <div>
                        <input type="button"/>
                        <label
                            onClick={this.props.next}
                            onMouseEnter={() => this.setState({"toggle": true})}
                            onMouseLeave={() => this.setState({"toggle": false})}
                            className={["button", this.entrance].join(" ")}
                            onAnimationEnd={this.handleAnimationEnd}>Next</label>
                    </div>
                </div>
            </>
        )
    }
}

export default FirstSection;
