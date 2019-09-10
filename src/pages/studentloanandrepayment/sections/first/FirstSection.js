import React, {Component} from 'react';
import "./FirstSection.css";
import "../../../../pagecomponents/button/Button.css"
import Button from "../../../../pagecomponents/button/Button";

class FirstSection extends Component {
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
                            htmlFor="thirdRadioBox">Yes
                        </label>

                        <input type="radio"
                               name="didStudentResitAYear"
                               value="false"
                               id="forthRadioBox"
                               defaultChecked={!this.props.didStudentResitAYear}/>
                        <label
                            onClick={() => this.props.update("didStudentResitAYear", false)}
                            htmlFor="forthRadioBox">No
                        </label>
                    </div>
                </fieldset>
                <br/>

                {this.wasCourseFourYearsLongForm()}
                <div className="buttonContainer">
                    <Button name={"Next"} command={this.props.next}/>
                </div>
            </>
        )
    }
}

export default FirstSection;
