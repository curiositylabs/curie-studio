"use client";
import ContentCard from "@/@core/components/Card";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams, useRouter } from "next/navigation";
import AddCollectionModal from "@/app/dashboard/section/[sectionId]/_components/AddCollectionModal";
import { useState } from "react";
import { useSession } from "next-auth/react";
import TitleHeader from "../../../_components/TitleHeader";
import Empty from "@/components/Empty";

interface Props {
  topics: any[];
}

const TopicCollectionList = ({ topics }: Props) => {
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const params = useParams();
  const router = useRouter();

  const { sectionId } = params;

  const handleClick = (item: any) => {
    router.push(`${sectionId}/${item.topic_collection_id}`);
  };
  const handleCreateTopic = () => {
    setAddModalOpen(true);
  };
  return (
    <>
      <TitleHeader
        title={`Topics`}
        buttonText="Create new"
        onClickCreate={handleCreateTopic}
      />
      <AddCollectionModal open={addModalOpen} setOpen={setAddModalOpen} />
      <Grid container spacing={2}>
        {topics?.length > 0 ? (
          topics.map((topic: any) => (
            <Grid xs={6} lg={4} key={topic.topic_id}>
              <ContentCard {...topic} onClick={() => handleClick(topic)} />
            </Grid>
          ))
        ) : (
          <Empty />
        )}
      </Grid>
    </>
  );
};

export default TopicCollectionList;
