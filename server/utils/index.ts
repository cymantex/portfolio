export const getEnv = (name: string) => {
    return (process.env[name])
        ? process.env[name]
        : require("../secret").default[name];
};