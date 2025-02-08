import jwt from "jsonwebtoken";
import {ResponseError} from "../error/response-error.js";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new ResponseError(401, 'Authorization headers is missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        throw new ResponseError(401, 'Token is missing from authorization headers');
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        throw new ResponseError(error.status, 'Invalid Credential');
    }
}

export default authMiddleware;