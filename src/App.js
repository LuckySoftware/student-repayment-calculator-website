import React, {Component} from 'react';
import './App.css';
import Navigation from "./pagecomponents/navigation/Navigation";
import StudentLoanRepaymentHome from "./pages/studentloanandrepayment/StudentLoanAndRepaymentHome"

class App extends Component {
    componentDidMount() {
        document.title = "Student Repayment Calculator";
    }

    render() {
        return (
            <>
                <Navigation/>
                <StudentLoanRepaymentHome/>
            </>
        );
    }
}

export default App;
