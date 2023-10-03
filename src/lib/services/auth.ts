import { makeServerRequest } from "../utils/api.util";
import { API_ENDPOINTS } from "./apiEndpoints";

export const getProfile = async () => {
  return await makeServerRequest(API_ENDPOINTS.PROFILE, "GET", null, {}, true);
};
