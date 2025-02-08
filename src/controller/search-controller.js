import {searchNameService, searchNimService, searchYmdService} from "../service/search-service.js";
import {logger} from "../application/logging.js";

const searchNameController = async (req, res, next) => {
    try {
        const nama = req.query.nama;
        const result = await searchNameService(nama);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const searchNimController = async (req, res, next) => {
    try {
        const nim = req.query.nim;
        logger.info(nim);
        const result = await searchNimService(nim);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const searchYmdController = async (req, res, next) => {
    try {
        const ymd = req.query.ymd;
        const result = await searchYmdService(ymd);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

export default {
    searchNameController,
    searchNimController,
    searchYmdController
}