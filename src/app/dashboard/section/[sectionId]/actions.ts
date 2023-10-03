"use server";
import {
  addTopicCollectionRequest,
  addTopicRequest,
} from "@/lib/services/topic";
import {
  AddTopicCollectionRequest,
  AddTopicRequest,
} from "@/types/topic.types";
import { revalidateTag } from "next/cache";

export async function addTopicCollection(payload: AddTopicCollectionRequest) {
  const res = await addTopicCollectionRequest(payload);
  if (!res.error) {
    const sectionId = payload.sections[0];
    revalidateTag(`gettopicsbysection${sectionId}`);
  }
  return res;
}

export async function addTopic(payload: AddTopicRequest) {
  const res = await addTopicRequest(payload);
  if (!res.error) {
    const topicId = payload.topic_id;
    revalidateTag(`getsubtopicsbytopic${topicId}`);
  }
  return res;
}
