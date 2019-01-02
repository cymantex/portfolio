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
        route: FreelancerApi.projectReviews,
        parser: parseReview
    },
    contestReviews: {
        route: FreelancerApi.contestReviews,
        parser: parseReview
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