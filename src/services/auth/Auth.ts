import {request} from '../Client.ts';
import {AUTH} from '../Endpoints.ts';
import {JWTRequest} from './interface.ts';

export const  getJwtToken = (params: JWTRequest) => request("post", AUTH.auth(), params)
