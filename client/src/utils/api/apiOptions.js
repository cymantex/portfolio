import {parsePortfolio, parseRepositories, parseReview} from "./apiParsers";
import FreelancerApi from "./FreelancerApi";
import GithubApi from "./GithubApi";

export const apiOptions = {
    portfolio: {
        routes: {
            portfolio: FreelancerApi.portfolio,
        },
        parsers: {
            portfolio: parsePortfolio
        }
    },
    reviews: {
        routes: {
            projectReviews: FreelancerApi.projectReviews,
            contestReviews: FreelancerApi.contestReviews
        },
        parsers: {
            projectReviews: parseReview,
            contestReviews: parseReview
        }
    },
    repositories: {
        routes: {
            repositories: GithubApi.repositories,
        },
        parsers: {
            repositories: parseRepositories
        }
    }
};