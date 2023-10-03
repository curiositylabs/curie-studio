"use client";
import Select from "@/@core/components/Select";
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { GRADES_OPTIONS } from "../../_constants";
import SubAppBarWrapper from "@/layout/subAppBar/style";

interface Props {}

const SectionSubAppBarContent = (props: Props) => {
  const [grade, setGrade] = useState<string>("");
  const handleGradeChange = (event: any) => {
    setGrade(event.target.value);
  };
  return (
    <SubAppBarWrapper>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          className="actions-left"
          sx={{ mr: 2, display: "flex", alignItems: "center" }}
        >
          <Select
            labelId="filter-grades"
            id="filter-grades"
            value={grade}
            displayEmpty
            size="small"
            onChange={handleGradeChange}
            bgColor="#F3F3F3"
          >
            <MenuItem value="">
              <em>Select Grade</em>
            </MenuItem>
            {GRADES_OPTIONS.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
    </SubAppBarWrapper>
  );
};

export default SectionSubAppBarContent;
