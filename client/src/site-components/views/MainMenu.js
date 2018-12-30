import React, {Component} from "react";
import classNames from "classnames";

export default class MainMenu extends Component {
    state = {
        showMobileMenu: false
    };

    toggleShowMobileMenu = () => this.setState((prevState) => ({
        showMobileMenu: !prevState.showMobileMenu
    }));

    render(){
        const navClass = classNames({
            "mobile-menu-open": this.state.showMobileMenu
        });

        return (
            <nav id="main-menu" {...this.props}>
                <div>
                    <i className="mobile-menu-icon fas fa-bars" onClick={this.toggleShowMobileMenu}/>
                </div>

                <nav className={navClass}>
                    <a href="#cv">Home</a>
                    <a href="#cv">CV</a>
                    <a href="#projects">Projects</a>
                    <a href="#repositories">Repositories</a>
                    <a href="#reviews">Testimonials</a>
                    <a href="#reviews">Skills</a>
                    <a href="#reviews">Contact</a>
                </nav>
            </nav>
        );
    }
}