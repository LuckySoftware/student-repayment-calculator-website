import React, {Component} from 'react';
import "../../css/TextField.css"
import TextField from '@material-ui/core/TextField';


class StudentWhoDidNotResitAYear extends Component {
    loadThirdYearInputsIfCourseWasThreeYearsLong = () => {
        if (this.props.courseFourYearsLong) {
            return (
                <>
                    <h1>Third year:</h1>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        id="outlined-required"
                        label="Tuition loan"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("thirdYearTuition", e.target.value)}
                        defaultValue={this.props.thirdYearTuition}
                    />
                    <TextField
                        required
                        type="number"
                        fullWidth
                        id="outlined-required"
                        label="Maintenance loan"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("thirdYearMaintenance", e.target.value)}
                        defaultValue={this.props.thirdYearMaintenance}
                    />
                </>
            )
        }
    };

    render() {
        return (
            <div className="wrapper">
                <div className="columnTwo">
                    <h1>Starting year:</h1>
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Starting year"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("startingYear", e.target.value)}
                        defaultValue={this.props.startingYear}
                    />
                    <h1>First year:</h1>
                    <TextField
                        type="number"
                        required
                        fullWidth
                        id="outlined-required"
                        label="Tuition loan"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("firstYearTuition", e.target.value)}
                        defaultValue={this.props.firstYearTuition}
                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Maintenance loan"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("firstYearMaintenance", e.target.value)}
                        defaultValue={this.props.firstYearMaintenance}
                    />

                    <h1>Second year:</h1>
                    <TextField
                        type="number"
                        required
                        fullWidth
                        id="outlined-required"
                        label="Tuition loan"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("secondYearTuition", e.target.value)}
                        defaultValue={this.props.secondYearTuition}
                    />
                    <TextField
                        type="number"
                        required
                        fullWidth
                        id="outlined-required"
                        label="Maintenance loan"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("secondYearMaintenance", e.target.value)}
                        defaultValue={this.props.secondYearMaintenance}
                    />

                    {this.loadThirdYearInputsIfCourseWasThreeYearsLong()}

                    <h1>Final year:</h1>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        id="outlined-required"
                        label="Tuition loan"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("finalYearTuition", e.target.value)}
                        defaultValue={this.props.finalYearTuition}
                    />
                    <TextField
                        type="number"
                        required
                        fullWidth
                        id="outlined-required"
                        label="Maintenance loan"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("finalYearMaintenance", e.target.value)}
                        defaultValue={this.props.finalYearMaintenance}
                    />
                </div>
            </div>
        );

    }
}

export default StudentWhoDidNotResitAYear;