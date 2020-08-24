import axios from "axios";
import Qs from "query-string";

// export const BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? "" //server-live
//     : "http://localhost:5000/"; //server-local

export const api = axios.create({
  // baseURL: BASE_URL,
  timeout: 15000,
  paramsSerializer: (params) => {
    return Qs.stringify(params);
    // return Qs.stringify(params, { arrayFormat: "indices" });
  },
});

export const userDetailGet = () => api.get("/api/current_user");

export const postCreate = (payload) => api.post("/api/post/create", payload);

// export const postGet = (query) => api.get(`/api/posts`, { query });
export const postGet = (query) => api.get(`/api/posts?${query}`);

export const sidePostsGet = () => api.get("/api/side-content");

export const postView = (id) => api.get(`/api/post/${id}`);

export const postDelete = (id) => api.delete(`/api/post/delete/${id}`);

// categories
export const categoryGet = () => api.get("/api/categories");

export const profitsIncrease = (id, type) =>
  api.post(`/api/profit/${id}/${type}`);

export const userPostsGet = (id) => api.get(`/api/user/${id}/posts`);
export const userScoresGet = (id) => api.get(`/api/user/${id}/scores`);

export const inquirySend = (data) => api.post("/api/contact-inquiry", data);

export const postEdit = (id, data) => api.post(`/api/edit/${id}`, data);
