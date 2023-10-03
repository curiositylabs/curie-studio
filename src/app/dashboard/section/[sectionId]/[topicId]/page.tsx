import TopicsList from "./_components/TopicList";
import { getSubTopicsByTopic } from "@/lib/services/topic";

interface Props {
  params: { topicId: string };
}

async function TopicPage({ params }: Props) {
  const { topicId } = params;
  const { sub_topics } = await getSubTopicsByTopic(topicId);
  console.log("TOPICSBYSUBTOPIC", sub_topics);
  return <TopicsList topics={sub_topics} />;
}

export default TopicPage;
