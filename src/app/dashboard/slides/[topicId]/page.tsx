import { getSlidesByTopic } from "@/lib/services/slides";
import SlidesContainer from "../_components/SlidesContainer";

interface Props {
  params: { topicId: string };
}

async function SlidesPage({ params }: Props) {
  const { topicId } = params;
  const { slides } = await getSlidesByTopic(topicId);
  console.log("SLIDES", slides);
  return <SlidesContainer slides={slides} />;
}

export default SlidesPage;
