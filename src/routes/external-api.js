import express from "express";
import searchController from "../controller/search-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";

const searchRouter = express.Router();
searchRouter.use(authMiddleware);

searchRouter.get('/api/search/nama', searchController.searchNameController);
searchRouter.get('/api/search/nim', searchController.searchNimController);
searchRouter.get('/api/search/ymd', searchController.searchYmdController);

export default searchRouter;