import {ResponseError} from "../error/response-error.js";

const errorMiddleware = (err, req, res, next) => {
    if (!err) next;

    if (err instanceof ResponseError) {
        res.status(err.status).json({
            error: err.message
        }).end();
    }

    res.status(500).json({
        error: err.message
    }).end();
}

export default errorMiddleware;