import * as React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CustomModal from "@/@core/components/Modal";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Input, { FormGroup, Label } from "@/@core/components/Input";
import { DataTimePicker } from "@/@core/components/DatePicker";
import Switch from "@/@core/components/Switch";
import Button from "@/@core/components/Button";
import dayjs, { Dayjs } from "dayjs";
import { GRADES_OPTIONS } from "../../../../_constants";
import { AddTopicRequest } from "@/types/topic.types";
import { useParams } from "next/navigation";
import { addTopic } from "../../../actions";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddTopicModal({ open, setOpen }: Props) {
  const [fromDate, setFromDate] = React.useState<number>();
  const [toDate, setToDate] = React.useState<number>();

  const params = useParams();

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const grades = formData.getAll("grades");
    const generateSlides = formData.get("generate-slides");
    const payload: AddTopicRequest = {
      name,
      description,
      grades: grades?.map(String),
      duration_from: fromDate,
      duration_to: toDate,
      auto_generate_slides: !!generateSlides,
      topic_id: params?.topicId as string,
    };
    console.log("PAYLOAD ADD SUBTOPIC", payload);
    const res = (await addTopic(payload)) as any;
    console.log("RESPONSE ADD SUBTOPIC", res);
    if (res?.error) {
      console.log("failed to create topic collection", res?.error);
    } else {
      handleClose();
    }
  };
  return (
    <CustomModal open={open} onClose={handleClose}>
      <div>
        <DialogTitle>Create Topic</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={5}>
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth margin="none">
                  <Label shrink htmlFor="name">
                    Topic Name
                  </Label>
                  <Input size="small" fullWidth name="name" id="name" />
                </FormControl>
              </Grid>
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth margin="none">
                  <Label shrink htmlFor="description">
                    Description / Prompt
                    <Typography variant="caption">(optional)</Typography>
                  </Label>
                  <Input
                    size="small"
                    fullWidth
                    name="description"
                    id="description"
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth margin="none">
                  <Label shrink htmlFor="grades">
                    Grades
                  </Label>
                  <FormGroup id="grades">
                    {GRADES_OPTIONS.map(
                      (item: { title: string; value: number }) => (
                        <FormControlLabel
                          name="grades"
                          key={item.value}
                          control={
                            <Checkbox
                              // checked={
                              //   Array.isArray(grades)
                              //     ? grades?.some(
                              //         (grade) => grade === item.value
                              //       )
                              //     : undefined
                              // }
                              name="grades"
                              value={item.value}
                              // inputProps={{ type: "number" }}
                            />
                          }
                          label={item.title}
                        />
                      )
                    )}
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth margin="none">
                  <Label shrink htmlFor="duration">
                    Duration / Time window
                  </Label>
                  <Grid container xs={12} px={0} mt={"32px"}>
                    <Grid xs={6} pl={0}>
                      <DataTimePicker
                        label="From"
                        value={fromDate && dayjs.unix(fromDate)}
                        //@ts-ignore
                        onChange={(newValue: Dayjs) =>
                          setFromDate(dayjs(newValue).unix())
                        }
                      />
                    </Grid>
                    <Grid xs={6} pl={0}>
                      <DataTimePicker
                        label="To"
                        value={toDate && dayjs.unix(toDate)}
                        //@ts-ignore
                        onChange={(newValue: Dayjs) =>
                          setToDate(newValue.unix())
                        }
                      />
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <FormControl variant="standard" fullWidth margin="none">
                  <FormControlLabel
                    name="generate-slides"
                    control={<Switch title="Yes" color="secondary" />}
                    label="Generate slides for this topic with AI"
                    labelPlacement="start"
                    sx={{
                      justifyContent: "space-between",
                      margin: 0,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="warning" type="submit">
              Add topic
            </Button>
          </DialogActions>
        </form>
      </div>
    </CustomModal>
  );
}
