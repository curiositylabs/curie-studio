import {
  AddTopicCollectionRequest,
  AddTopicRequest,
} from "@/types/topic.types";
import { makeServerRequest } from "../utils/api.util";
import { API_ENDPOINTS } from "./apiEndpoints";

export const getTopicsBySection = async (section_id: string, filters = {}) => {
  try {
    return await makeServerRequest(
      API_ENDPOINTS.GET_TOPICS,
      "POST",
      { section_id, ...filters },
      {},
      true,
      `gettopicsbysection${section_id}`
    );
  } catch (error) {
    console.log("GET TOPICS BY SECTION FAILED", error);
    return { error };
  }
};

export const getSubTopicsByTopic = async (
  topic_collection_id: string,
  filters = {}
) => {
  try {
    return await makeServerRequest(
      API_ENDPOINTS.GET_TOPICS,
      "POST",
      { topic_collection_id, ...filters },
      {},
      true,
      `getsubtopicsbytopic${topic_collection_id}`
    );
  } catch (error) {
    console.log("GET TOPICS BY SECTION FAILED", error);
    return { error };
  }
};

export const addTopicCollectionRequest = async (
  payload: AddTopicCollectionRequest
) => {
  try {
    const data = await makeServerRequest(
      API_ENDPOINTS.CREATE_TOPIC,
      "POST",
      payload,
      {},
      true
    );
    console.log("DATA ADD TOPIC COLLECTION", data);
    return data;
  } catch (error: any) {
    console.log("CREATE TOPIC COLLECTION FAILED", error);
    return { error };
  }
};

export const addTopicRequest = async (payload: AddTopicRequest) => {
  try {
    const data = await makeServerRequest(
      API_ENDPOINTS.CREATE_SUBTOPIC,
      "POST",
      payload,
      {},
      true
    );
    console.log("DATA ADD SUBTOPIC", data);
    return data;
  } catch (error: any) {
    console.log("CREATE SUBTOPIC FAILED", error);
    return { error };
  }
};
