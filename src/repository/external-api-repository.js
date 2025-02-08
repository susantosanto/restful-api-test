import axios from "axios";
import {ResponseError} from "../error/response-error.js";
import {logger} from "../application/logging.js";

const fetchData = async () => {
   try {
       const response = await axios.get("https://bit.ly/48ejMhW");
       return response.data.DATA;
   } catch (error) {
       logger.error("Error fetching data from external API", error.message);
       throw new ResponseError(500, "Failed to fetch data from external API" );
   }
}

export default fetchData;