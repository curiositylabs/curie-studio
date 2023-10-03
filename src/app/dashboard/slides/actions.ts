"use server";
import { addSlideRequest, updateSlideRequest } from "@/lib/services/slides";
import { AddSlideRequest } from "@/types/slides.types";
import { revalidateTag } from "next/cache";

export async function addSlide(payload: AddSlideRequest) {
  const res = await addSlideRequest(payload);
  if (!res.error) {
    const subTopicId = payload.subtopic_id;
    revalidateTag(`getslidesbytopic${subTopicId}`);
  }
  return res;
}

export async function updateSlide(slideId: string, payload: AddSlideRequest) {
  const res = await updateSlideRequest(slideId, payload);
  if (!res.error) {
    const subTopicId = payload.subtopic_id;
    revalidateTag(`getslidesbytopic${subTopicId}`);
  }
  return res;
}
