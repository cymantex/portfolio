import {parsePortfolio, parseRepositories, parseReview} from "./apiParsers";
import FreelancerApi from "./FreelancerApi";
import GithubApi from "./GithubApi";

export const apiOptions = {
    portfolio: {
        route: FreelancerApi.portfolio,
        parse: parsePortfolio
    },
    projectReviews: {
        route: FreelancerApi.projectReviews,
        parse: parseReview
    },
    contestReviews: {
        route: FreelancerApi.contestReviews,
        parse: parseReview
    },
    repositories: {
        route: GithubApi.repositories,
        parse: parseRepositories
    }
};