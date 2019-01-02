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
    projectReviews: {
        routes: {
            projectReviews: FreelancerApi.projectReviews,
        },
        parsers: {
            projectReviews: parseReview
        }
    },
    contestReviews: {
        routes: {
            contestReviews: FreelancerApi.contestReviews,
        },
        parsers: {
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