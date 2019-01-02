export const parseError = (err) => {
    if(err.response && err.response.data){
        return (typeof err.response.data === "string")
            ? {error: err.response.data}
            : err.response.data
    } else if(typeof err.message === "string"){
        return err.message.replace("Error: ", "");
    }

    return err.toString();
};