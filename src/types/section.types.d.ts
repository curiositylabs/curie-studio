export interface SectionType {
  section_id?: string;
  type: string;
  user_id: string;
  name: string;
  description: string;
  grades: number[];
  duration_from: string | undefined;
  duration_to: string | undefined;
  auto_generate_topics?: boolean;
}

export interface GetSectionsResponse {
  response: SectionType[];
}
