"use server";
import { addSectionRequest } from "@/lib/services/section";
import { revalidateTag } from "next/cache";

export async function addSection(payload: Record<string, any>) {
  const res = await addSectionRequest(payload);
  if (!res.error) {
    revalidateTag("getsections");
  }
  return res;
}
