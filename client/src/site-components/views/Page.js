import React, {Component} from "react";

export class Page extends Component {
    componentDidMount(){
        window.onbeforeunload = this.handleUnload;
    }

    handleUnload = (event) => {
        console.log(event);
    };

    componentWillUnmount(){
        window.removeEventListener("onbeforeunload", this.handleUnload);
    }

    render(){
        const {children, ...props} = this.props;

        return (
            <section className="page" {...props}>
                {children}
            </section>
        );
    }
}