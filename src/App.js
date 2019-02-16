import React, {Component} from 'react';
import './App.css';
import FirstSection from "./form/sections/first/FirstSection";
import SecondSection from "./form/sections/second/SecondSection";

class App extends Component {
    state = {
        currentPositionInForm: 0,

        didStudentResitAYear: null,
        wasCourseFourYearsLong: false,

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
        yearlyRaise: null
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

    update = (name, value) => {
        this.setState({name: value})
    };

    prev = () => {
        this.setState({currentPositionInForm: this.state.currentPositionInForm - 1})
    };

    next = () => {
        this.setState({currentPositionInForm: this.state.currentPositionInForm + 1})
    };

    displayForm = () => {
        switch (this.state.currentPositionInForm) {
            case 0:
                return (
                    <FirstSection
                        update={this.update}
                        didStudentResitAYear={this.state.didStudentResitAYear}
                        wasCourseFourYearsLong={this.state.wasCourseFourYearsLong}
                        next={this.next}
                    />
                );
            case 1:
                return (
                    <SecondSection
                        update={this.update}
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
        return (
            <>
                <div className="wrapper">
                    <div className="test">
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
