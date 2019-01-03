import _ from "lodash";

export const parseReview = (key, response) => response.result.reviews.map(review => ({
    description: review.description,
    title: review.review_context.context_name,
    url: `https://www.freelancer.com/${review.review_context.seo_url}`,
    date: review.submitdate * 1000,
    userId: review.from_user_id
}));

export const parsePortfolio = (key, response) => {
    const getThumbnail = (file, index) => {
        if(index <= 0) return {};
        return (file.thumbnails[index])
            ? file.thumbnails[index]
            : getThumbnail(file, index - 1);
    };

    return _.flatMap(Object
        .values(response.result.portfolios))
        .map(portfolioItem => ({
            contentType: portfolioItem.content_type,
            description: portfolioItem.description,
            thumbnail: (portfolioItem.files[0] && getThumbnail(portfolioItem.files[0], 4))
                ? getThumbnail(portfolioItem.files[0], 4).cdn_url : null,
            files: portfolioItem.files.map(file => ({
                url: getThumbnail(file, 6).cdn_url,
                filename: file.filename,
                thumbnails: file.thumbnails.map(thumbnail => thumbnail.cdn_url)
            })),
            title: portfolioItem.title
        }));
};

export const parseRepositories = (key, repositories) => {
    return _.sortBy(repositories.map(repository => ({
        createdAt: repository.created_at,
        description: repository.description,
        url: repository.svn_url,
        updatedAt: repository.updated_at,
        name: repository.name,
        language: repository.language
    })), ["createdAt"]).reverse();
};