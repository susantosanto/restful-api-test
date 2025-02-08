import fetchData from "../repository/external-api-repository.js"
import {ResponseError} from "../error/response-error.js";
import {validate} from "../utils/validate.js";
import {searchNameValidation, searchNimValidation, searchYmdValidation} from "../validation/search-validation.js";
import {processData} from "../utils/process-data.js";

const searchNameService = async (nama) => {
    const validateName = validate(searchNameValidation, {nama});
    const data = await fetchData();
    let processedData = processData(data);
    const result = processedData.filter(item => item.nama === validateName.nama);

    if (result.length === 0) {
        throw new ResponseError(404, 'Nama Not Found');
    }

    return result;
}

const searchNimService = async (nim) => {
    const validateNim = validate(searchNimValidation, {nim});
    const data = await fetchData();
    const processedData = processData(data);
    const result = processedData.filter(item => item.nim === validateNim.nim);

    if (result.length === 0) {
        throw new ResponseError(404, 'Nim Not Found');
    }
    return result;
}

const searchYmdService = async (ymd) => {
    const validateYmd = validate(searchYmdValidation, {ymd});
    const data = await fetchData();
    const processedData = processData(data);
    const result = processedData.filter(item => item.ymd === validateYmd);

    if (result.length === 0) {
        throw new ResponseError(404, 'YMD Not Found');
    }

    return result;
}

export {
    searchNameService,
    searchNimService,
    searchYmdService
}