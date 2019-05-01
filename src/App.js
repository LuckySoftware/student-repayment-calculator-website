import React, {Component} from 'react';
import './App.css';
import FirstSection from "./form/sections/first/FirstSection";
import SecondSection from "./form/sections/second/SecondSection";
import ThirdSection from "./form/sections/third/ThirdSection";

class App extends Component {
    componentDidMount(){
        document.title = "Student Repayment Calculator";
    }

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

        secondStepColor: "white",
        thirdStepColor: "white"
    };

    update = (name, value) => {
        this.setState({[name]: value});
    };

    prev = () => {
        this.setState({currentPositionInForm: this.state.currentPositionInForm - 1}, () =>
            this.updateSteps());
        this.setState({directionInForm: "previous"});
        this.updateSteps();
    };

    next = () => {
        this.setState({currentPositionInForm: this.state.currentPositionInForm + 1}, () =>
        this.updateSteps());
        this.setState({directionInForm: "next"});
        this.updateSteps();
    };

    updateSteps = () => {
        console.log(this.state.currentPositionInForm);
        switch (this.state.currentPositionInForm) {
            case 0:
                this.setState({secondStepColor: null});
                break;
            case 1:
                this.setState({secondStepColor: "black"});
                this.setState({thirdStepColor: null});
                break;
            case 2:
                this.setState({thirdStepColor: "black"});
                break;
            default:
                return null;
        }
    };

    submit = () => {
        // console.log("making a request");
        // const result = fetch('http://localhost:8080/yearlyRepayment', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         salary: 45000,
        //     })
        // });
        //
        // console.log(result);
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

                        totalStudentLoanDebt={this.state.totalStudentLoanDebt}
                        yearOfGraduation={this.state.yearOfGraduation}

                        next={this.next}
                        prev={this.prev}
                    />
                );

            case 2:
                return (
                    <ThirdSection
                        prev={this.prev}
                        yearlyIncome={this.state.yearlyIncome}
                        yearlyRaise={this.state.yearlyRaise}
                        submit={this.submit()}
                        update={this.update}
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
                    <div className="stepIndicator">
                        <div className="stepGrid">
                            <div className={["step", "black"].join(" ")}>
                                First
                            </div>
                            <div/>
                            <div className={["step", this.state.secondStepColor].join(" ")}>
                                Second
                            </div>
                            <div/>
                            <div className={["step", this.state.thirdStepColor].join(" ")}>
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
