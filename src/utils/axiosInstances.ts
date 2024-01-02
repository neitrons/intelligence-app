import axios from "axios";

export const axiosGithub = axios.create({
  baseURL: process.env.GITHUB_API_ENDPOINT,
  headers: {
    Authorization: `token ${process.env.GITHUB_API_KEY}`,
  },
});
