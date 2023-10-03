export interface AddSlideRequest {
  description: string;
  image_query?: string;
  phrase?: string;
  question: string;
  title: string;
  image_url: string;
  topic_id?: string;
  subtopic_id: string;
}
