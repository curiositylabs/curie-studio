import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import SlidesContainer from "./style";
import { useEffect, useState } from "react";
import { reorder } from "@/lib/utils/common.util";
import { List, Typography } from "@mui/material";
import SlideNavItem from "./SlideNavItem";
import EditSlideModal from "./AddSlideModal";
import NavHeader from "./NavHeader";
import { AddBox } from "@mui/icons-material";

interface Props {
  slides: any[];
  activeSlide: any;
  setActiveSlide: (slide: any) => void;
  handleAddSubmit: (e: any, callback: any) => void;
  handleEditSubmit: (e: any, callback: any) => void;
}

function SlidesNav(props: Props) {
  const [slides, setSlides] = useState<any[]>([]);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const { handleAddSubmit, handleEditSubmit, setActiveSlide, activeSlide } =
    props;

  console.log("activeSlide", activeSlide);

  useEffect(() => {
    setSlides(props.slides);
  }, [props.slides]);

  const onDragEnd = ({ destination, source }: DropResult) => {
    // dropped outside the list
    if (!destination) return;

    const newItems = reorder(slides, source.index, destination.index);

    setSlides(newItems);
  };
  const handleClickEdit = (active: any) => {
    setActiveSlide(active);
    setEditModalOpen(true);
  };
  const handleClickSlide = (active: any) => {
    setActiveSlide(active);
  };

  const handleEdit = (e: any) => {
    handleEditSubmit(e, () => setEditModalOpen(false));
  };
  return (
    <SlidesContainer height="100%" overflow="auto">
      <EditSlideModal
        header="Update Slide"
        submitButtonText="Update"
        title={activeSlide?.title}
        description={activeSlide?.description}
        image_url={activeSlide?.image_url}
        question={activeSlide?.question}
        open={editModalOpen}
        setOpen={setEditModalOpen}
        handleSubmit={handleEdit}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <List
              disablePadding
              ref={provided.innerRef}
              subheader={<NavHeader handleAddSubmit={handleAddSubmit} />}
              {...provided.droppableProps}
            >
              {slides?.length > 0 ? (
                slides.map((item, index) => (
                  <>
                    <SlideNavItem
                      slide={item}
                      index={index}
                      key={item.id}
                      handleClickEdit={() => handleClickEdit(item)}
                      isActive={activeSlide?.slide_id === item.slide_id}
                      onClick={() => handleClickSlide(item)}
                    />
                  </>
                ))
              ) : (
                <Typography marginTop={2} paddingX={2} fontWeight={600}>
                  Slides do not exist for this topic. Click on <AddBox /> to add
                  your first slide
                </Typography>
              )}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </SlidesContainer>
  );
}

export default SlidesNav;
