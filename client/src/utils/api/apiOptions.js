import {parsePortfolio, parseRepositories, parseReview} from "./apiParsers";
import FreelancerApi from "./FreelancerApi";
import GithubApi from "./GithubApi";

export const apiOptions = {
    portfolio: {
        route: FreelancerApi.portfolio,
        parser: parsePortfolio
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
        route: GithubApi.repositories,
        parser: parseRepositories
    }
};