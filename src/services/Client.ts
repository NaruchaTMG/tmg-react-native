import axios  from 'axios';
import {BASE_URL, TIMEOUT} from './Endpoints.ts';
import join from 'url-join';

type METHOD = 'get' | 'post' | 'put' | 'patch' | 'delete';

const Client = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'cache-control': 'no store',
    'x-api-language': "th",
    'x-app-version': "1",
    'Authorization': '',
    'content-type': 'application/json'
  },
})

Client.interceptors.request.use(function (config) {
  if(__DEV__) {
    console.log(`Request config: ${JSON.stringify(config, undefined, 2)}`);
  }
  return config;
}, function (error) {
  console.log(`Request Error: ${error}`);
  return Promise.reject(error);
});

// Add a response interceptor
Client.interceptors.response.use(function (response) {
  if(__DEV__) {
    console.log(`Response response: ${JSON.stringify(response.status, undefined, 2)}`);
    console.log(`Response response: ${JSON.stringify(response.data, undefined, 2)}`);
  }
  return response;
}, function (error) {
  console.log(`Response Error: ${error}`);
  return Promise.reject(error);
});

export async function request(method: METHOD, url: string, data?: any) {
  try {
    return await Client.request({
        method,
        url,
        data: method === 'get' ? undefined : data,
      })
  } catch (error) {
    console.error(error);
    return error;
  }
}
