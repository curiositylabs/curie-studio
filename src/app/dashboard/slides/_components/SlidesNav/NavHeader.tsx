import { AddBox } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import AddSlideModal from "./AddSlideModal";

interface Props {
  handleAddSubmit: (e: any, callback: any) => void;
}

const Header = ({ handleAddSubmit }: Props) => {
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const theme = useTheme();

  const handleAdd = (e: any) => {
    handleAddSubmit(e, () => setAddModalOpen(false));
  };
  const handleClickAdd = () => {
    setAddModalOpen(true);
  }
  return (
    <>
      <AddSlideModal
        submitButtonText="Add"
        header="Add Slide"
        open={addModalOpen}
        setOpen={setAddModalOpen}
        handleSubmit={handleAdd}
      />
      <Box
        paddingY={2}
        paddingX={3}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        bgcolor={theme.palette.primary.light}
        borderBottom={`1px solid ${theme.palette.primary.light}`}
      >
        <b>Content</b>
        <AddBox sx={{ cursor: "pointer" }} onClick={handleClickAdd} />
      </Box>
    </>
  );
};

export default Header;
