import React, {Component} from "react";
import PropTypes from "prop-types";
import $ from "jquery";

class RecaptchaWidget extends Component {
    static defaultProps = {
        theme: "light",
        size: "normal"
    };

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        theme: PropTypes.oneOf(["light", "dark"]),
        size: PropTypes.oneOf(["compact", "normal"]),
        siteKey: PropTypes.string.isRequired
    };

    componentDidMount(){
        if($("#google-recaptcha-script").length === 0){
            $("body").append(
                `<script
                    id="google-recaptcha-script"
                    src="https://www.google.com/recaptcha/api.js"></script>`
            );
        }
    }

    componentWillUnmount(){
        const $googleRecaptchaScript = $("#google-recaptcha-script");

        if($googleRecaptchaScript.length > 0) {
            $googleRecaptchaScript.remove();
        }
    }

    render(){
        const {
            theme,
            siteKey,
            size,
            ...props
        } = this.props;

        return (
            <div
                className="g-recaptcha"
                data-sitekey={siteKey}
                data-theme={theme}
                data-size={size}
                {...props}
            />
        );
    }
}

export default RecaptchaWidget;