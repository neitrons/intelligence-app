import axios from "axios";

import { GITHUB_API_ENDPOINT, GITHUB_API_KEY } from "@env";

export const axiosGithub = axios.create({
  baseURL: GITHUB_API_ENDPOINT,
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`,
  },
});
