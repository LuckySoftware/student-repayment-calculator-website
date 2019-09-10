import React, {Component} from 'react';
import StudentWhoDidNotResitAYear from "./StudentWhoDidNotResitAYear";
import StudentWhoDidResitAYear from "./StudentWhoDidResitAYear";
import "../../../../pagecomponents/button/Button.css"
import "../../../../pagecomponents/css/TextField.css"
import Button from "../../../../pagecomponents/button/Button"
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";


class SecondSection extends Component {
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
                <StudentWhoDidResitAYear
                    totalStudentLoanDebt={this.props.totalStudentLoanDebt}
                    yearOfGraduation={this.props.yearOfGraduation}
                    update={this.props.update}
                />
            );
        }
    };

    theme = () => createMuiTheme({
        palette: {
            primary: {main: '#000000'},
        },
        typography: {useNextVariants: true},
    });

    render() {
        return (
            <>
                <MuiThemeProvider theme={this.theme}>
                {this.loadSectionDependingOnWhatWasSelectedInPrevious()}
                </MuiThemeProvider>
                <div className="buttonContainer">
                    <Button name={"Previous"} command={this.props.prev}/>
                    <Button name={"Next"} command={this.props.next}/>
                </div>
            </>
        );

    }
}

export default SecondSection;