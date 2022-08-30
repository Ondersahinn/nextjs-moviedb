import { http } from './http'
import { errorParser } from './errorParser';
import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const getRequest = (url, headers) =>
http
    .get(url, {cancelToken: source.token , config: headers })
    .then(res => res.data)
    .catch(err => errorParser(err));

export const postRequest = (url, data, headers) =>
http
    .post(url, data, { cancelToken: source.token ,config: headers })
    .then(res => res.data)
    .catch(err => errorParser(err));

export const putRequest = (url, data, headers) =>
http
    .put(url, data, {cancelToken: source.token , config: headers })
    .then(res => res.data)
    .catch(err => errorParser(err));

export const deleteRequest = (url, headers) =>
http
    .delete(url, {cancelToken: source.token , config: headers })
    .then(res => res.data)
    .catch(err => errorParser(err));
