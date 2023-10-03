import { makeServerRequest } from "../utils/api.util";
import { API_ENDPOINTS } from "./apiEndpoints";
import { AddSlideRequest } from "@/types/slides.types";

export const getSlidesByTopic = async (topic_id: string) => {
  try {
    return await makeServerRequest(
      API_ENDPOINTS.GET_SLIDES,
      "GET",
      null,
      { topic_id },
      true,
      `getslidesbytopic${topic_id}`
    );
  } catch (error) {
    console.log("GET SLIDES BY TOPIC FAILED", error);
    return { error };
  }
};

export const addSlideRequest = async (payload: AddSlideRequest) => {
  try {
    const data = await makeServerRequest(
      API_ENDPOINTS.CREATE_SLIDE,
      "POST",
      payload,
      {},
      true
    );
    console.log("DATA ADD SLIDE", data);
    return data;
  } catch (error: any) {
    console.log("CREATE SLIDE FAILED", error);
    return { error };
  }
};

export const updateSlideRequest = async (
  slideId: string,
  payload: AddSlideRequest
) => {
  try {
    const data = await makeServerRequest(
      `${API_ENDPOINTS.UPDATE_SLIDE}/${slideId}`,
      "PATCH",
      payload,
      {},
      true
    );
    console.log("DATA UPDATE SLIDE", data);
    return data;
  } catch (error: any) {
    console.log("UPDATE SLIDE FAILED", error);
    return { error };
  }
};
