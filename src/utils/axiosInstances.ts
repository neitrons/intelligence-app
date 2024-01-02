import axios from "axios";

export const axiosGithub = axios.create({
  baseURL: "https://raw.githubusercontent.com/neitrons/intelligence-data/main",
  headers: {
    Authorization: "token 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",
  },
});
