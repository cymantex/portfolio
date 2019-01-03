import React, {Fragment} from "react";
import {Moment} from "../../components/views/Moment";
import {FancyLoader} from "./FancyLoader";

export const ReviewsView = ({contestReviews, projectReviews, ...props}) => {
    if(projectReviews.length === 0){
        return (
            <Fragment>
                <FancyLoader/>
                <h4 style={{fontWeight: 100}} className="mt-15">Loading reviews...</h4>
            </Fragment>
        );
    }

    const renderReview = (review, i) => {
        return (
            <a style={{backgroundImage: `url(/images/4.jpg)`}}
               className="review"
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
        <div className="reviews" {...props}>
            {projectReviews.map(renderReview)}
            {contestReviews.map(renderReview)}
        </div>
    );
};