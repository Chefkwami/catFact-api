export const errorHandler = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }
    console.error(error.stack);

    let statusCode = 500;
    let message = "Internal Server Error";

    if (error.response && error.response.status) {
        statusCode = error.response.status;
        message = error.response.data || error.message;
    } else if (error.code === "ENOTFOUND" || error.code === "ECONNREFUSED") {
        statusCode = 503;
        message = " CatFact Api is currently unavailable"
    } else {
        message = error.message || message;
    }
    res.status(statusCode).json({ error: message })
}