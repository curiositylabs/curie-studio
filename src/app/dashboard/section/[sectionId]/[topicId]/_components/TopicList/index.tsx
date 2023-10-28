"use client";
import ContentCard from "@/@core/components/Card";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TitleHeader from "../../../../_components/TitleHeader";
import AddTopicModal from "../AddTopicModal";
import Empty from "@/components/Empty";

interface Props {
  topics: any[];
}

function TopicsList({ topics }: Props) {
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

  const router = useRouter();
  const handleClick = (item: any) => {
    router.push(`/dashboard/slides/${item.subtopic_id}`);
  };
  const handleCreateTopic = () => {
    setAddModalOpen(true);
  };
  return (
    <>
      <TitleHeader
        title={`Sub topics`}
        buttonText="Create topic"
        onClickCreate={handleCreateTopic}
      />
      <AddTopicModal open={addModalOpen} setOpen={setAddModalOpen} />
      <Grid container spacing={2}>
        {topics?.length > 0 ? (
          topics?.map((data) => (
            <Grid xs={6} lg={4} key={data.id}>
              <ContentCard {...data} onClick={() => handleClick(data)} />
            </Grid>
          ))
        ) : (
          <Empty />
        )}
      </Grid>
    </>
  );
}

export default TopicsList;
