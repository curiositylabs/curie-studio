import { makeServerRequest } from "../utils/api.util";
import { API_ENDPOINTS } from "./apiEndpoints";

export const getSectionsRequest = async (filters = {}) => {
  try {
    return await makeServerRequest(
      API_ENDPOINTS.GET_SECTIONS,
      "POST",
      filters,
      {},
      true,
      "getsections"
    );
  } catch (error) {
    console.log("GET SECTIONS FAILED", error);
    return { error };
  }
};

export const addSectionRequest = async (payload: Record<string, any>) => {
  try {
    const data = await makeServerRequest(
      API_ENDPOINTS.CREATE_SECTION,
      "POST",
      payload,
      {},
      true
    );
    return data;
  } catch (error: any) {
    console.log("ADD SECTION FAILED", error);
    return { error };
  }
};
