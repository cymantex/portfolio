import React, {Component} from "react";
import PropTypes from "prop-types";
import {Animation} from "./Animation";

export default class TypewriterAnimation extends Component {
    static defaultProps = {
        animation: "bounceIn",
        animationDuration: 1000,
        typingSpeed: 100,
        delay: 0
    };
    static propTypes = {
        text: PropTypes.string.isRequired,
        animation: PropTypes.string,
        animationDuration: PropTypes.number,
        typingSpeed: PropTypes.number,
        delay: PropTypes.number
    };

    constructor(props){
        super(props);

        this.state = {
            words: this.props.text.split(" "),
            queue: this.props.text.split("").filter(char => char !== " "),
            showCharacters: []
        }
    }

    componentDidMount(){
        this.timeouts = [];

        this.timeouts.push(setTimeout(() => {
            this.state.queue.forEach((character, i) => {
                this.timeouts.push(setTimeout(() => {
                    this.setState((prevState) => ({
                        showCharacters: [...prevState.showCharacters, character]
                    }));
                }, this.props.typingSpeed * i));
            });
        }, this.props.delay));
    }

    componentWillUnmount() {
        this.timeouts.forEach((timeout) => {
            clearTimeout(timeout);
        });
    }

    render(){
        const {words, showCharacters} = this.state;

        return (
            <span className="typewriter-animation">
                {words.map((word, i) => (
                    <span key={i}>
                        {word
                            .split("")
                            .map((char, j) => {
                                const wordIndexStart = words.filter((w, k) => k < i).join("").length;
                                return (
                                    (showCharacters[wordIndexStart + j])
                                        ? <Animation
                                            span
                                            animation={this.props.animation}
                                            duration={this.props.animationDuration}
                                            key={j}>{char}</Animation>
                                        : <span style={{opacity: 0}} key={j}>{char}</span>
                                );
                            })}
                        {(i !== words.length - 1) && (
                            <span style={{whiteSpace: "pre-wrap"}}> </span>
                        )}
                    </span>
                ))}
            </span>
        );
    }
}