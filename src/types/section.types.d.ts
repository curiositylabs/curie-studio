export interface SectionType {
  section_id?: string;
  name: string;
  description: string;
  grades: number[];
  duration_from: number | undefined;
  duration_to: number | undefined;
  auto_generate_topics: boolean;
}
