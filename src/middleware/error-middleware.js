import {ResponseError} from "../error/response-error.js";

const errorMiddleware = (err, req, res, next) => {
    if (!err) {
        return next();
    }

    // if (err instanceof ResponseError) {
    //     res.status(err.status).json({
    //         error: err.message
    //     });
    // }

    res.status(500).json({
        error: err.message
    });
}

export default errorMiddleware;