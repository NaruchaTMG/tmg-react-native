export interface JWTRequest {
  login_token: string,
  device_id: string
}

export interface JWTResponse  {
  code: number,
  jwt: string
}

