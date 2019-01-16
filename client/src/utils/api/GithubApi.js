const baseUrl = "https://api.github.com";
const user = "dv16sen";

export default class GithubApi {
    static repositories = `${baseUrl}/users/${user}/repos?limit=100`;
}