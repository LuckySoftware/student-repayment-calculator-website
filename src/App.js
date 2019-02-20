import React, {Component} from 'react';
import './App.css';
import FirstSection from "./form/sections/first/FirstSection";
import SecondSection from "./form/sections/second/SecondSection";

class App extends Component {
    state = {
        currentPositionInForm: 0,

        didStudentResitAYear: null,
        wasCourseFourYearsLong: true,

        startingYear: null,
        firstYearTuition: null,
        firstYearMaintenance: null,
        secondYearTuition: null,
        secondYearMaintenance: null,
        thirdYearTuition: null,
        thirdYearMaintenance: null,
        finalYearTuition: null,
        finalYearMaintenance: null,

        totalStudentLoanDebt: null,
        yearOfGraduation: null,

        yearlyIncome: null,
        yearlyRaise: null,

        directionInForm: null,
    };

    studentWhoDidResitAYearForm = () => {
        return (
            <>
                <input type="number" value="totalStudentLoanDebt" onClick={this.update}/>
                <input type="number" value="yearOfGraduation" onClick={this.update}/>

                <input
                    type="button"
                    value="Previous"
                    onClick={this.prev}
                />

                <input
                    type="button"
                    value="Next"
                    onClick={this.next}
                />
            </>
        );
    };

    displayThirdYearOptionIfCourseWasFourYearsLong = () => {
        if (this.state.wasCourseFourYearsLong === 'true')
            return (
                <>
                    <input type="number"
                           value="thirdYearTuition"
                           placeholder="test3"
                           onClick={this.update}/>
                    <input type="number"
                           value="thirdYearMaintenance"
                           placeholder="test4"
                           onClick={this.update}/>
                </>
            );
        else {
            return (
                null
            );
        }
    };

    setAnimation = () => {
        this.animationForFirstStep = "test";
    };

    animateStepIndicator = () => {
        if (this.state.directionInForm !== null) {
            switch (this.state.currentPositionInForm) {
                case 0:
                    if (this.state.directionInForm === "next") {

                    } else if (this.state.directionInForm === "previous") {

                    }
                    break;
                case 1:
                    if (this.state.directionInForm === "next") {
                        this.setAnimation()
                    }
                    break;
                case 2:
                    break;
                default:
            }
        }
    };

    update = (name, value) => {
        this.setState({name: value})
    };

    prev = () => {
        this.setState({currentPositionInForm: this.state.currentPositionInForm - 1});
        this.setState({directionInForm: "previous"})
    };

    next = () => {
        this.setState({currentPositionInForm: this.state.currentPositionInForm + 1});
        this.setState({directionInForm: "next"})
    };

    displayForm = () => {
        switch (this.state.currentPositionInForm) {
            case 0:
                return (
                    <FirstSection
                        didStudentResitAYear={this.state.didStudentResitAYear}
                        wasCourseFourYearsLong={this.state.wasCourseFourYearsLong}
                        next={this.next}
                    />
                );
            case 1:
                return (
                    <SecondSection
                        update={this.updateToggle}
                        didStudentResitAYear={this.state.didStudentResitAYear}
                        wasCourseFourYearsLong={this.state.wasCourseFourYearsLong}
                        next={this.next}
                        prev={this.prev}
                    />
                );
            default:
                return null;
        }
    };

    render() {
        this.animateStepIndicator();
        console.log(this.animationForFirstStep);
        //TODO Make step indicator work
        return (
            <>
                <div className="wrapper">
                    <div className="stepIndicator">
                        <div className="stepGrid">
                            <div className={"step"}>
                                First
                            </div>
                            <div/>
                            <div className="step">
                                Second
                            </div>
                            <div/>
                            <div className="step">
                                Third
                            </div>
                        </div>
                    </div>
                    <div className="formBody">
                        <form>
                            {this.displayForm()}
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
