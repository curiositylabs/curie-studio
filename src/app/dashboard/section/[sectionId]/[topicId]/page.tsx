import TopicsList from "./_components/TopicList";
import { getSubTopicsByTopic } from "@/lib/services/topic";

interface Props {
  params: { topicId: string };
}

async function TopicPage({ params }: Props) {
  const { topicId } = params;
  const { response: sub_topics } = await getSubTopicsByTopic(topicId, {
    grade: "all",
  });
  return <TopicsList topics={sub_topics} />;
}

export default TopicPage;
