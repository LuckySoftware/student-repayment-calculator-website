import React, {Component} from 'react';
import "./../../../../pagecomponents/button/Button.css"
import "./../../../../pagecomponents/css/TextField.css"
import TextField from '@material-ui/core/TextField';
import Button from "../../../../pagecomponents/button/Button";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

class ForthSection extends Component {
    theme = () => createMuiTheme({
        palette: {
            root: {main: '#000000'},
        },
        typography: {useNextVariants: true},
    });

    render() {
        return (
            <>
                <MuiThemeProvider theme={this.theme}>
                    <div className="wrapper">
                        <div className="columnTwo">
                            <h1>Total amount paid:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-bare"
                                margin="normal"
                                variant="outlined"
                                disabled
                                defaultValue={this.props.result["totalAmountPaid"]}
                            />

                            <h1>Remaining debt:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-bare"
                                margin="normal"
                                variant="outlined"
                                disabled
                                defaultValue={this.props.result["remainingAmountOfStudentLoan"]}
                            />

                            <h1>Total amount of years spent paying:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-bare"
                                margin="normal"
                                variant="outlined"
                                disabled
                                defaultValue={this.props.result["totalAmountOfYearsSpentPayingStudentLoan"]}
                            />

                            <h1>Total amount of months spent paying:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-bare"
                                margin="normal"
                                variant="outlined"
                                disabled
                                defaultValue={this.props.result["totalAmountOfMonthsSpentPayingStudentLoan"]}
                            />

                            <h1>Yearly income:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-required"
                                label="Yearly income"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.props.update("yearlyIncome", e.target.value)}
                                defaultValue={this.props.yearlyIncome}
                            />

                            <h1>Yearly raise:</h1>
                            <TextField
                                type="number"
                                required
                                fullWidth
                                id="outlined-required"
                                label="Yearly raise"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.props.update("yearlyRaise", e.target.value)}
                                defaultValue={this.props.yearlyRaise}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>

                <div className="buttonContainer">
                    <Button name={"resubmit"} command={this.props.submit}/>
                    <Button name={"home"} command={this.props.backToStart}/>
                </div>
            </>
        );
    }
}

export default ForthSection;