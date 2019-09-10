import React, {Component} from 'react';
import "./../../../../pagecomponents/css/TextField.css"
import "./../../../../pagecomponents/button/Button.css"
import TextField from '@material-ui/core/TextField';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import Button from "../../../../pagecomponents/button/Button"


class ThirdSection extends Component {
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
                    <div className="wrapper">
                        <div className="columnTwo">
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
                    <Button name={"previous"} command={this.props.prev}/>
                    <Button name={"submit"} command={this.props.submit}/>
                </div>
            </>
        );

    }
}

export default ThirdSection;