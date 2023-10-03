import * as React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CustomModal from "@/@core/components/Modal";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  Typography,
} from "@mui/material";
import Input, { FormGroup, Label, RadioGroup } from "@/@core/components/Input";
import { DataTimePicker } from "@/@core/components/DatePicker";
import Switch from "@/@core/components/Switch";
import Button from "@/@core/components/Button";
import Select from "@/@core/components/Select";
import dayjs, { Dayjs } from "dayjs";
import { GRADES_OPTIONS, UPDATE_FREQUENCY_OPTIONS } from "../../../_constants";
import { convertFormDataToObject } from "@/lib/utils/common.util";
import { AddTopicCollectionRequest } from "@/types/topic.types";
import { useParams } from "next/navigation";
import { addTopicCollection } from "../../actions";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddCollectionModal({ open, setOpen }: Props) {
  const [fromDate, setFromDate] = React.useState<number>();
  const [toDate, setToDate] = React.useState<number>();
  const [type, setType] = React.useState<string>("collection");

  const params = useParams();

  const handleClose = () => {
    setOpen(false);
  };
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const grades = formData.getAll("grades");
    const generateId =
      type === "collection" ? "generate_sub_topics" : "auto_generate_slides";
    const autogenerate = formData.get(generateId);
    const updateFrequency = formData.get("update-frequency") as string;
    const formObject = convertFormDataToObject(formData) as any;
    const payload: AddTopicCollectionRequest = {
      name: formObject?.name,
      description: formObject?.description,
      topic_collection: type === "collection",
      grades: grades?.map(String),
      duration_from: fromDate,
      duration_to: toDate,
      [generateId]: !!autogenerate,
      // update_frequency: updateFrequency,
      sections: [params?.sectionId as string],
    };
    console.log("PAYLOAD ADD TOPIC COLLECTION", payload);
    const res = (await addTopicCollection(payload)) as any;
    console.log("RESPONSE ADD SECTION", res);
    if (res?.error) {
      console.log("failed to create topic collection", res?.error);
    } else {
      handleClose();
    }
  };
  return (
    <CustomModal open={open} onClose={handleClose}>
      <div>
        <DialogTitle>Create New</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={5}>
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth margin="none">
                  <Label shrink htmlFor="type">
                    Create new
                  </Label>
                  <RadioGroup
                    row
                    id="type"
                    aria-labelledby="type"
                    name="type"
                    value={type}
                    onChange={handleTypeChange}
                  >
                    <FormControlLabel
                      value="collection"
                      control={<Radio />}
                      label="Topic Collection"
                    />
                    <FormControlLabel
                      value="topic"
                      control={<Radio />}
                      label="Topic"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth margin="none">
                  <Label shrink htmlFor="name">
                    {type === "collection"
                      ? "Topic Collection Name"
                      : "Topic Name"}
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
                          setFromDate(newValue.unix())
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
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth margin="none">
                  {type === "collection" ? (
                    <FormControlLabel
                      name="generate_sub_topics"
                      control={<Switch title="Yes" color="secondary" />}
                      label="Generate topics for this collection with AI"
                      labelPlacement="start"
                      sx={{
                        justifyContent: "space-between",
                        margin: 0,
                      }}
                    />
                  ) : (
                    <FormControlLabel
                      name="auto_generate_slides"
                      control={<Switch title="Yes" color="secondary" />}
                      label="Generate slides for this topic with AI"
                      labelPlacement="start"
                      sx={{
                        justifyContent: "space-between",
                        margin: 0,
                      }}
                    />
                  )}
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography>
                    Frequency for updating with new topics
                  </Typography>
                  <Select
                    labelId="update-frequency"
                    id="update-frequency"
                    name="update-frequency"
                    defaultValue="never"
                    displayEmpty
                    size="small"
                    bgColor="#F3F3F3"
                  >
                    {UPDATE_FREQUENCY_OPTIONS.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="warning" type="submit">
              {type === "collection" ? "Add collection" : "Add topic"}
            </Button>
          </DialogActions>
        </form>
      </div>
    </CustomModal>
  );
}
