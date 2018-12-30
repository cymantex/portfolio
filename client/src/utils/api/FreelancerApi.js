const baseUrl = "https://www.freelancer.com/api";
const user = "26257926"; //smnrkssn
const version = "0.1";

export default class FreelancerApi {
    static portfolio = `${baseUrl}/users/${version}/portfolios?users[]=${user}`;
    static projectReviews = `${baseUrl}/projects/${version}/reviews?to_users[]=${user}`;
    static contestReviews = `${FreelancerApi.projectReviews}&review_types[]=contest`;
}