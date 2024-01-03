declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare module "@env" {
  export const API_BASE: string;
  export const GITHUB_API_ENDPOINT: string;
  export const GITHUB_API_KEY: string;
}
