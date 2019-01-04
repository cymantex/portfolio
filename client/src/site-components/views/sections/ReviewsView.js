import React from "react";
import {Moment} from "../../../components/views/Moment";
import {Section} from "./Section";
import {ApiErrorMessage} from "../Messages";

export const ReviewsView = ({apiError, contestReviews, projectReviews, ...props}) => {
    if(apiError){
        return <ApiErrorMessage/>;
    } else if(projectReviews.length === 0){
        return (
            <Section.Loader>
                <h4>Loading reviews...</h4>
            </Section.Loader>
        );
    }

    const renderReview = (review, i) => {
        return (
            <a className="review"
               href={review.url}
               target="_blank"
               rel="noopener noreferrer"
               key={i}
            >
                <span className="title">{review.title}</span>
                <span className="description">{review.description}</span>
                <span className="date"><Moment time={review.date}/></span>
            </a>
        );
    };

    return (
        <Section id="reviews" {...props}>
            {projectReviews.map(renderReview)}
            {contestReviews.map(renderReview)}
        </Section>
    );
};