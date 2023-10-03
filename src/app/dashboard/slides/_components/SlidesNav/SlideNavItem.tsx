import { Edit } from "@mui/icons-material";
import { ListItem, ListItemText, Stack, styled, useTheme } from "@mui/material";
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import QuestionChip from "./QuestionChip";

const SlidenavItemContainer = styled("div")(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.primary.light}`,
}));

export interface Props {
  slide: any;
  index: number;
  handleClickEdit: () => void;
  isActive?: boolean;
  onClick?: () => void;
}

const SlideNavItem = (props: Props) => {
  const { slide, index, handleClickEdit, isActive, onClick } = props;
  const theme = useTheme();

  const handleDeleteQuestion = (slide: any, callback?: () => void) => {
    console.log("handleDeleteQuestion", slide);
    if (typeof callback === "function") {
      callback();
    }
  };
  return (
    <Draggable draggableId={slide.slide_id} index={index}>
      {(provided, snapshot) => (
        <SlidenavItemContainer>
          <ListItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            sx={{
              background:
                snapshot.isDragging || isActive
                  ? theme.palette.secondary.light
                  : "",
              padding: "8px 26px 8px 30px",
              flexDirection: "column",
            }}
            onClick={onClick}
          >
            <ListItemText
              primary={
                <Stack
                  direction={{ xs: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  justifyContent="space-between"
                >
                  <b>{slide.title}</b>
                  <Edit
                    sx={{ cursor: "pointer !important" }}
                    onClick={handleClickEdit}
                  />
                </Stack>
              }
              secondary={
                <p style={{ textAlign: "justify" }}>{slide.description}</p>
              }
            />
            {slide.question && (
              <QuestionChip
                question={slide.question}
                onDelete={(callback: () => void) =>
                  handleDeleteQuestion(slide, callback)
                }
              />
            )}
          </ListItem>
        </SlidenavItemContainer>
      )}
    </Draggable>
  );
};

export default SlideNavItem;
