import { getRequest } from '../client/client';
import finalConfig from '../../constans/config.json';
import headers from '../../constans/header.json';
import { parseResult } from './dataParser';
import { baseUrl } from '../../constans/index'

export const getUpcommingService = async (queryParam) => {
    const url = baseUrl + finalConfig.UPCOMING + queryParam;
    const config = headers.content_type.application_json;
    const result = await getRequest(url, config);
    const parsedResult = parseResult(result);
    return parsedResult;
};

export const getSearchMovie = async (queryParams) => {
    const url = baseUrl + finalConfig.SEARCHMOVIE + queryParams;
    const config = headers.content_type.application_json;
    const result = await getRequest(url, config);
    const parsedResult = parseResult(result);
    return parsedResult;
};


export const getMovieDetailService = async (id) => {
    const url = baseUrl + finalConfig.MOVIE + '/' +id;
    const config = headers.content_type.application_json;
    const result = await getRequest(url, config);
    const parsedResult = parseResult(result);
    return parsedResult;
};

export const getSmiilarMovie = async (id) => {
    const url = baseUrl +finalConfig.MOVIE + '/'  +id + '/' + finalConfig.SIMILAR + '?language=tr-TR';
    const config = headers.content_type.application_json;
    const result = await getRequest(url, config);
    const parsedResult = parseResult(result);
    return parsedResult;
};