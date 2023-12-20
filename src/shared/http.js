import { HttpClient } from "obfetch";


// const BASE_URL =  'https://api.wflixu.cn';
const BASE_URL = import.meta.env.PROD ? 'https://api.wflixu.cn' : "http://127.0.0.1:8443";

const http = new HttpClient({
  baseURL: BASE_URL,
});

export function tokenInterceptor(req, next) {
  let token = window.localStorage.getItem("qdazi_token");

  if (token) {
    const reqWithHeader = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`),
    });
    return next(reqWithHeader);
  }

  return next(req);
}

http.use([tokenInterceptor]);

export { http, BASE_URL };
