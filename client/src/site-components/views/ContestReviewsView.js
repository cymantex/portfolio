import React, {Fragment} from "react";

export const ContestReviewsView = ({contestReviews, ...props}) => {
    console.log(contestReviews);

    return (
        <div {...props}>
            {contestReviews.map((contestReview, i) => (
                <Fragment key={i}>
                    <p>Title: {contestReview.title}</p>
                    <p>Description: {contestReview.description}</p>
                    <p>Url: {contestReview.url}</p>
                    <p>Date: {contestReview.date}</p>
                    <p>User: {contestReview.userId}</p>
                    <hr/>
                </Fragment>
            ))}
        </div>
    );
};