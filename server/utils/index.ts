export const getEnv = (name: string) => {
    if(process.env[name]) return process.env[name];

    try {
        return require("../secret").default[name];
    } catch {
        return "";
    }
};