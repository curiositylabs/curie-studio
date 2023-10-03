import { useState, useEffect } from "react";
import { UploadWidgetResult } from "uploader";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CustomModal from "@/@core/components/Modal";
import Button from "@/@core/components/Button";
import Input, { Label } from "@/@core/components/Input";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Divider, FormControl } from "@mui/material";
import FileUpload from "@/@core/components/Uploader";

interface Props {
  header: string;
  open: boolean;
  title?: string;
  description?: string;
  image_url?: string;
  question?: string;
  setOpen: (open: boolean) => void;
  handleSubmit: (e: any) => void;
  submitButtonText?: string;
}

export default function AddSlideModal({
  header,
  title,
  description,
  image_url,
  question,
  open,
  submitButtonText,
  setOpen,
  handleSubmit,
}: Props) {
  const [imageValue, setImageValue] = useState<string | undefined>();
  const [file, setFile] = useState<UploadWidgetResult>();

  console.log("file", file);
  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (event: any) => {
    const value = event.target.value;

    if (!value) {
      setFile(undefined);
    }
    setImageValue(value);
  };

  useEffect(() => {
    if (file) {
      setImageValue(file.fileUrl);
    }
  }, [file]);

  useEffect(() => {
    setImageValue(image_url);
  }, [image_url]);

  return (
    <CustomModal open={open} onClose={handleClose}>
      <DialogTitle>{header}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={5}>
            <Grid xs={12} paddingBottom={0}>
              <FormControl variant="standard" fullWidth margin="none">
                <Label shrink htmlFor="title">
                  Title
                </Label>
                <Input
                  size="small"
                  defaultValue={title}
                  fullWidth
                  name="title"
                  id="title"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} paddingBottom={0}>
              <FormControl variant="standard" fullWidth margin="none">
                <Label shrink htmlFor="description">
                  Description
                </Label>
                <Input
                  size="small"
                  defaultValue={description}
                  fullWidth
                  name="description"
                  id="description"
                  multiline
                  maxRows={6}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} paddingBottom={0}>
              <FormControl variant="standard" fullWidth margin="none">
                <Label shrink htmlFor="question">
                  Question
                </Label>
                <Input
                  size="small"
                  defaultValue={question}
                  fullWidth
                  name="question"
                  id="question"
                  maxRows={6}
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl variant="standard" fullWidth margin="none">
                <Label shrink htmlFor="image_url">
                  Image URL
                </Label>
                <Input
                  size="small"
                  value={imageValue}
                  fullWidth
                  name="image_url"
                  id="image_url"
                  placeholder="eg.: https://www.example-image.com"
                  onChange={handleImageChange}
                />
                {!file ? (
                  <>
                    <Divider sx={{ my: 2 }}>OR</Divider>
                    <FileUpload setFiles={(files) => setFile(files[0])} />
                  </>
                ) : null}
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            color="warning"
            variant="contained"
            onClick={handleClose}
          >
            {submitButtonText ? submitButtonText : "Submit"}
          </Button>
        </DialogActions>
      </form>
    </CustomModal>
  );
}
