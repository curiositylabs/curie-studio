export const reorder = <T>(
  list: T[],
  startIndex: number,
  endIndex: number
): T[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export function convertFormDataToObject(
  formData: FormData
): Record<string, any> {
  let jsonObject: Record<string, any> = {};

  //@ts-ignore
  for (const [key, value] of formData.entries()) {
    // If the key already exists, make it an array and append to it
    if (jsonObject[key]) {
      if (!Array.isArray(jsonObject[key])) {
        jsonObject[key] = [jsonObject[key]];
      }
      jsonObject[key].push(value);
    } else {
      jsonObject[key] = value;
    }
  }
  return jsonObject;
}
