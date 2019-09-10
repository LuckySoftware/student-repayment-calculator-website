import React, {Component} from 'react';
import './StudentLoanAndRepaymentHome.css';
import FirstSection from "./sections/first/FirstSection";
import SecondSection from "./sections/second/SecondSection";
import ThirdSection from "./sections/third/ThirdSection";
import ForthSection from "./sections/forth/ForthSection";

class StudentLoanAndRepaymentHome extends Component {
    componentDidMount() {
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
        thirdStepColor: "white",

        result: null
    };

    update = (name, value) => {
        this.setState({[name]: value});
    };

    backToStart = () => {
        this.setState({currentPositionInForm: 0}, () =>
            this.updateSteps());
    };

    prev = () => {
        this.setState({currentPositionInForm: this.state.currentPositionInForm - 1}, () =>
            this.updateSteps());
        this.setState({directionInForm: "previous"});
        this.updateSteps();
    };

    next = () => {
        if (this.state.currentPositionInForm !== 3) {
            this.setState({currentPositionInForm: this.state.currentPositionInForm + 1}, () =>
                this.updateSteps());
            this.setState({directionInForm: "next"});
            this.updateSteps();
        }
    };

    updateSteps = () => {
        switch (this.state.currentPositionInForm) {
            case 0:
                this.setState({secondStepColor: null});
                this.setState({thirdStepColor: null});
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
        let jsonBody;
        let requestUrl;

        if (this.state.didStudentResitAYear === false) {
            requestUrl = 'https://backend.studentrepaymentcalculator.com/noresit';
            jsonBody = JSON.stringify({
                startingYear: this.state.startingYear,
                wasCourseFourYearsLong: this.state.wasCourseFourYearsLong,
                firstYearTuition: this.state.firstYearTuition,
                firstYearMaintenance: this.state.firstYearMaintenance,
                secondYearTuition: this.state.secondYearTuition,
                secondYearMaintenance: this.state.secondYearMaintenance,
                thirdYearTuition: this.state.thirdYearTuition,
                thirdYearMaintenance: this.state.thirdYearMaintenance,
                finalYearTuition: this.state.finalYearTuition,
                finalYearMaintenance: this.state.finalYearMaintenance,
                yearlyIncome: this.state.yearlyIncome,
                yearlyRaise: this.state.yearlyRaise
            });
        } else {
            requestUrl = 'https://backend.studentrepaymentcalculator.com/resit';
            jsonBody = JSON.stringify({
                totalDebt: this.state.totalStudentLoanDebt,
                yearlyIncome: this.state.yearlyIncome,
                yearlyRaise: this.state.yearlyRaise,
                yearOfGraduation: this.state.yearOfGraduation
            });
        }

        fetch(requestUrl, {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: jsonBody
        }).then(response => response.json())
            .then(data => this.setState({result: data}))
            .then(this.next);
        //data["repaymentAmount"] example of how to get data of a json object in react
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
                        submit={this.submit}
                        next={this.next}
                        update={this.update}
                    />
                );

            case 3:
                return (
                    <ForthSection
                        update={this.update}
                        result={this.state.result}
                        backToStart={this.backToStart}
                        yearlyIncome={this.state.yearlyIncome}
                        yearlyRaise={this.state.yearlyRaise}
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

export default StudentLoanAndRepaymentHome;
