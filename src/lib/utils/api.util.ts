"use server";
import { getTokenForActions } from "./auth.util";

export type HTTP_METHOD =
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH";

// server action: use this for server components only.
export const makeServerRequest = async (
  endpoint: string,
  method: HTTP_METHOD = "GET",
  body: any = null,
  queryParams: Record<string, string | number> = {},
  withAuth?: boolean,
  tag?: string,
  customToken?: string // override token with customToken if passed
): Promise<any> => {
  const apiUrl = new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}${endpoint}`);
  const tokenFromActions = await getTokenForActions();

  const token = customToken || tokenFromActions;

  // Append query parameters to URL for GET requests
  Object.keys(queryParams).forEach((key) =>
    apiUrl.searchParams.append(key, String(queryParams[key]))
  );

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (withAuth) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
  } as RequestInit;

  if (["POST", "PUT", "PATCH"].includes(method)) {
    options.body = JSON.stringify(body);
  }
  if (tag) {
    options.next = {
      tags: [tag],
    };
  }

  try {
    const response = await fetch(apiUrl.toString(), options);
    if (!response?.ok) {
      const data = await response.json();
      const error = new Error(data?.message || "Failed to make request") as any;
      error.status = response?.status || 500;
      throw error;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR MAKE PAYMENT", error);
    throw error;
  }
};
