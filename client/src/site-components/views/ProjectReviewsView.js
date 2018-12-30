import React, {Fragment} from "react";

export const ProjectReviewsView = ({projectReviews, ...props}) => {
    return (
        <div {...props}>
            {projectReviews.map((projectReview, i) => (
                <Fragment key={i}>
                    <p>Title: {projectReview.title}</p>
                    <p>Description: {projectReview.description}</p>
                    <p>Url: {projectReview.url}</p>
                    <p>Date: {projectReview.date}</p>
                    <p>User: {projectReview.userId}</p>
                    <hr/>
                </Fragment>
            ))}
        </div>
    );
};