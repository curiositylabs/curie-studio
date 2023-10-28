"use client";
import * as React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CustomModal from "@/@core/components/Modal";
import AddSectionWrapper from "./style";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import Input, { FormGroup, Label } from "@/@core/components/Input";
import { GRADES_OPTIONS, UPDATE_FREQUENCY_OPTIONS } from "../../_constants";
import { DataTimePicker } from "@/@core/components/DatePicker";
import Switch from "@/@core/components/Switch";
import Button from "@/@core/components/Button";
import Select from "@/@core/components/Select";
import dayjs, { Dayjs } from "dayjs";
import { convertFormDataToObject } from "@/lib/utils/common.util";
import { addSection } from "../../actions";
import { SectionType } from "@/types/section.types";

interface Props extends Partial<SectionType> {
  open: boolean;
  setOpen: (open: boolean) => void;
  headerText: string;
  action?: "edit" | "add";
}

const AddSectionModal = ({
  action = "add",
  open,
  setOpen,
  headerText,
  ...sectionProps
}: Props) => {
  const [fromDate, setFromDate] = React.useState<string>();
  const [toDate, setToDate] = React.useState<string>();

  const { name, description, grades, duration_from, duration_to } =
    sectionProps;

  const isEdit = action === "edit";

  React.useEffect(() => {
    if (duration_from) {
      setFromDate(duration_from);
    }
  }, [duration_from]);
  React.useEffect(() => {
    if (duration_to) {
      setFromDate(duration_to);
    }
  }, [duration_to]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (formData: FormData) => {
    const grades = formData.getAll("grades");
    const formObject = convertFormDataToObject(formData) as SectionType;
    const payload: SectionType = {
      ...formObject,
      grades: grades?.map(Number),
      duration_from: fromDate,
      duration_to: toDate,
    };
    const res = (await addSection(payload)) as any;
    if (res?.error) {
      console.log("failed to create section", res?.error);
    } else {
      handleClose();
    }
  };
  return (
    <CustomModal open={open} onClose={handleClose}>
      <AddSectionWrapper>
        <DialogTitle>{headerText}</DialogTitle>
        <form action={handleSubmit}>
          <DialogContent>
            <Grid container spacing={5}>
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth margin="none">
                  <Label shrink htmlFor="section-name">
                    Section Name
                  </Label>
                  <Input
                    defaultValue={name}
                    size="small"
                    fullWidth
                    name="name"
                    id="section-name"
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} paddingBottom={0}>
                <FormControl variant="standard" fullWidth margin="none">
                  <Label shrink htmlFor="description">
                    Description / Prompt
                    <Typography variant="caption">(optional)</Typography>
                  </Label>
                  <Input
                    defaultValue={description}
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
                              checked={
                                Array.isArray(grades)
                                  ? grades?.some(
                                      (grade) => grade === item.value
                                    )
                                  : undefined
                              }
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
              <Grid xs={12} paddingBottom={isEdit ? "unset" : 0}>
                <FormControl variant="standard" fullWidth margin="none">
                  <Label shrink htmlFor="duration">
                    Duration / Time window
                  </Label>
                  <Grid container xs={12} px={0} mt={"32px"}>
                    <Grid xs={6} pl={0}>
                      <DataTimePicker
                        label="From"
                        value={fromDate && dayjs.unix(Number(fromDate))}
                        //@ts-ignore
                        onChange={(newValue: Dayjs) =>
                          setFromDate(newValue.unix().toString())
                        }
                      />
                    </Grid>
                    <Grid xs={6} pl={0}>
                      <DataTimePicker
                        label="To"
                        value={toDate && dayjs.unix(Number(toDate))}
                        //@ts-ignore
                        onChange={(newValue: Dayjs) =>
                          setToDate(newValue.unix().toString())
                        }
                      />
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              {!isEdit && (
                <Grid xs={12} paddingBottom={0}>
                  <FormControl variant="standard" fullWidth margin="none">
                    <FormControlLabel
                      name="auto_generate_topics"
                      control={<Switch title="Yes" color="secondary" />}
                      label="Generate topics for this section with AI"
                      labelPlacement="start"
                      sx={{
                        justifyContent: "space-between",
                        margin: 0,
                      }}
                    />
                  </FormControl>
                </Grid>
              )}
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
                    labelId="update_frequency"
                    id="update_frequency"
                    name="update_frequency"
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
              Add section
            </Button>
          </DialogActions>
        </form>
      </AddSectionWrapper>
    </CustomModal>
  );
};

export default AddSectionModal;
