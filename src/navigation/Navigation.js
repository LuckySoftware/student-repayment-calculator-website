import React, {Component} from 'react';
import "./css/Navigation.css"
import "./css/SideBarAnimation.css"

class Navigation extends Component {
    state = {
        navigationBarShown: true,
        navigationBarTextAnimation: null,
        navigationBarAnimation: null,

    };

    showNavigationBar = () => {
        switch (this.state.navigationBarShown) {
            case true:
                this.setState({navigationBarShown: false});
                this.setState({navigationBarTextAnimation: "un-hide"});
                this.setState({navigationBarAnimation: "growLeft"});
                break;
            case false:
                this.setState({navigationBarShown: true});
                this.setState({navigationBarTextAnimation: "hide"});
                this.setState({navigationBarAnimation: "shrinkLeft"});
                break;
            default: return null;
        }
    };

    render() {
        return (
            <>
                <div className={["sidebar", this.state.navigationBarAnimation].join(" ")}>
                    <div className="navigationIconContainer" onClick={this.showNavigationBar}>
                        <div className="navigationIcon"/>
                        <div className="navigationIcon"/>
                        <div className="navigationIcon"/>
                    </div>
                    <div className={["textForSideBar", this.state.navigationBarTextAnimation].join(" ")}>
                        <h3>Repayment calculator</h3>
                        <h3>Salary calculator</h3>
                        <h3>Contact me</h3>
                    </div>
                </div>
            </>
        )
    }
}

export default Navigation;
