import React, {Component} from 'react';
import "../../css/TextField.css"
import TextField from '@material-ui/core/TextField';


class StudentWhoDidResitAYear extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="columnTwo">
                    <h1>Total student loan debt:</h1>
                    <TextField
                        type="number"
                        required
                        fullWidth
                        id="outlined-required"
                        label="Total student loan debt"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("totalStudentLoanDebt", e.target.value)}
                        defaultValue={this.props.totalStudentLoanDebt}
                    />

                    <h1>Year of graduation:</h1>
                    <TextField
                        type="number"
                        required
                        fullWidth
                        id="outlined-required"
                        label="Year of graduation"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => this.props.update("yearOfGraduation", e.target.value)}
                        defaultValue={this.props.yearOfGraduation}
                    />
                </div>
            </div>
        );

    }
}

export default StudentWhoDidResitAYear;