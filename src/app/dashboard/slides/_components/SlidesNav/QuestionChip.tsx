import Button from "@/@core/components/Button";
import { QuestionAnswer } from "@mui/icons-material";
import { Box, Chip, Popover } from "@mui/material";
import * as React from 'react';

interface Props {
  question: "string";
  onDelete: (callback: () => void) => void;
}

const QuestionChip = (props: Props) => {
  const { question, onDelete } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete(handleClose);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'delete-question-popover' : undefined;
  return (
    <>
      <Chip
        size="medium"
        color="primary"
        sx={{
          alignSelf: "flex-end",
          height: "auto",
          padding: "5px !important",
          "& .MuiChip-label": {
            display: "block",
            whiteSpace: "normal",
            lineHeight: "1.3",
          },
        }}
        icon={<QuestionAnswer />}
        label={question}
        onDelete={handleConfirm}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Box padding={2}>
          <p>Are you sure you want to delete the question for this slide?</p>
          <Box display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
            <Button onClick={handleClose} color="primary">No</Button>
            <Button color="warning" variant="contained" onClick={handleDelete}>Yes</Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default QuestionChip;
