import React, {Component, Fragment} from "react";
import {ApiErrorMessage} from "../Messages";

export default class PortfolioView extends Component {
    state = {
        showImages: -1
    };

    renderImages = (index, files) => {
        if(this.state.showImages === index){
            return files.map((file, i) => (
                <img alt={file.filename} src={file.url} key={i}/>
            ));
        }
    };

    render(){
        const {apiError, portfolio, ...props} = this.props;

        if(apiError){
            return <ApiErrorMessage/>;
        }

        return (
            <div {...props}>
                {portfolio.map((portfolioItem, i) => (
                    <Fragment key={i}>
                        <p>Title: {portfolioItem.title}</p>
                        <p>Description: {portfolioItem.description}</p>
                        {this.renderImages(i, portfolioItem.files)}
                        <button onClick={() => this.setState((prevState) => ({
                            showImages: (prevState.showImages === i) ? -1 : i
                        }))}>
                            {(this.state.showImages === i)
                                ? "Hide Images"
                                : "Show Images"}
                        </button>
                    </Fragment>
                ))}
            </div>
        );
    }
}