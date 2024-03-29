import { extend } from "umi-request";

const backendUrl = "https://expertise-shaper-37ut.onrender.com/api";
// const backendUrl = "http://localhost:9000/api";

const API = extend({
    prefix: backendUrl,
    timeout: 60 * 1000,
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        t: Date.now(),
    },
});

const MOCKAPI_URL = "https://63a654b9f8f3f6d4ab0a2899.mockapi.io/api";

const mockApi = extend({
    prefix: MOCKAPI_URL,
    timeout: 60 * 1000,
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        t: Date.now(),
    },
});

export { API, mockApi };
