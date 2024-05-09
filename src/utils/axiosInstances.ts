import axios from "axios";

export const axiosGithub = axios.create({
  baseURL: "https://raw.githubusercontent.com/neitrons/intelligence-data/main",
  headers: {
    Authorization: `token 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`,
  },
});
