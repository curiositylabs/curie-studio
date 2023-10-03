import { getTopicsBySection } from "@/lib/services/topic";
import TopicCollectionList from "./_components/TopicCollectionList";

interface Props {
  params: { sectionId: string };
}

async function SectionPage({ params }: Props) {
  const { sectionId } = params;
  const { topics } = await getTopicsBySection(sectionId);
  console.log("TOPICS", topics);
  return <TopicCollectionList topics={topics} />;
}

export default SectionPage;
