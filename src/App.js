import React, {Component} from 'react';
import './App.css';
import FirstSection from "./form/sections/first/FirstSection";
import SecondSection from "./form/sections/second/SecondSection";

class App extends Component {
    state = {
        currentPositionInForm: 0,

        courseFourYearsLong: true,
        didStudentResitAYear: true,

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

    update = (name, value) => {
        this.setState({[name]: value});
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
                        courseFourYearsLong={this.state.courseFourYearsLong}
                        next={this.next}
                        update={this.update}
                    />
                );
            case 1:
                return (
                    <SecondSection
                        update={this.update}
                        didStudentResitAYear={this.state.didStudentResitAYear}
                        courseFourYearsLong={this.state.courseFourYearsLong}

                        startingYear={this.state.startingYear}
                        firstYearTuition={this.state.firstYearTuition}
                        firstYearMaintenance={this.state.firstYearMaintenance}
                        secondYearTuition={this.state.secondYearTuition}
                        secondYearMaintenance={this.state.secondYearMaintenance}
                        thirdYearTuition={this.state.thirdYearTuition}
                        thirdYearMaintenance={this.state.thirdYearMaintenance}
                        finalYearTuition={this.state.finalYearTuition}
                        finalYearMaintenance={this.state.finalYearMaintenance}

                        next={this.next}
                        prev={this.prev}
                    />
                );
            default:
                return null;
        }
    };

    render() {
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
