import React, {Component} from 'react';
import "./Button.css"

class Button extends Component {
    state = {
        firstAnimationEnded: false,
        secondAnimationEnded: false,
        mouseInButton: null,
    };

    handleAnimationEnd = (event) => {
        if (event.animationName === "onMouseEnterAnimation") {
            this.setState({"firstAnimationEnded": true})
        }

        if (event.animationName === "onMouseLeaveAnimation") {
            this.setState({"secondAnimationEnded": true})
        }
    };

    setAnimationState = () => {
        if (this.state.mouseInButton != null) {
            switch (this.state.firstAnimationEnded) {
                case true:
                    if (this.state.secondAnimationEnded === true) {
                        this.setState({"firstAnimationEnded": false});
                        this.setState({"secondAnimationEnded": false})
                    } else if (this.state.mouseInButton === false) {
                        this.animation = "slideOutToRight";
                    }
                    break;

                case false:
                    if (this.state.secondAnimationEnded === false
                        && this.animation !== "slideInFromLeft"
                        && this.state.mouseInButton === true) {
                        this.animation = "slideInFromLeft";
                    }
                    break;
                default:
            }
        }

    };

    render() {
        this.setAnimationState();
        return (
            <>
                <div className="buttonDiv">
                    <input type="button"/>
                    <label
                        onClick={this.props.command}
                        onMouseEnter={() => this.setState({"mouseInButton": true})}
                        onMouseLeave={() => this.setState({"mouseInButton": false})}
                        className={["button", this.animation].join(" ")}
                        onAnimationEnd={this.handleAnimationEnd}>{this.props.name}</label>
                </div>
            </>
        );
    }
}

export default Button;
