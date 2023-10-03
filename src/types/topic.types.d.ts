export interface AddTopicCollectionRequest {
  name: string;
  description?: string;
  grades?: string[];
  sections: string[];
  duration_from?: number;
  duration_to?: number;
  topic_collection: boolean;
  generate_sub_topics?: booleans;
  auto_generate_slides?: boolean;
  //   update_frequency?: string;
}

export interface AddTopicRequest {
  name: string;
  description?: string;
  grades?: string[];
  topic_id: string;
  duration_from?: number;
  duration_to?: number;
  auto_generate_slides?: boolean;
  //   update_frequency?: string;
}
