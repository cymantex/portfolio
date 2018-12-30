import https from "https";
import http from "http";

export const fetchHtml = async (url: string) => {
    const module = (url.startsWith("https")) ? https : http;

    return new Promise<string>(resolve => module.get(url, (res) => {
        let html = "";
        res.on("data", (chunk) => {html += chunk;});
        res.on("end", () => resolve(html));
    }));
};