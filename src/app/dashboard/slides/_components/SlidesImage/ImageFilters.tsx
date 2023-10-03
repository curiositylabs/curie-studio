import Input from "@/@core/components/Input";
import Select from "@/@core/components/Select";
import { Box, MenuItem, useTheme } from "@mui/material";
import { useState } from "react";

const sources = [
  {
    title: "Youtube",
    value: "youtube",
  },
  {
    title: "DuckDuckGo",
    value: "duckduckgo",
  },
  {
    title: "Google",
    value: "google",
  },
];
const types = [
  {
    title: "Video",
    value: "video",
  },
  {
    title: "Gif",
    value: "gif",
  },
  {
    title: "Image",
    value: "image",
  },
];

const ImageFilters = () => {
  const [source, setSource] = useState<string>("all");
  const [type, setType] = useState<string>("all");
  const theme = useTheme();

  const handleSourceChange = (event: any) => {
    setSource(event.target.value);
  };
  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };
  return (
    <Box
      width="100%"
      bgcolor={theme.palette.secondary.light}
      paddingX={3}
      paddingY={1}
      gap={2}
      display={"flex"}
      alignItems="center"
      justifyContent="flex-start"
      flex="none"
    >
      <span>Relevant media for</span>
      <Input
        // @ts-ignore
        size="extraSmall"
        bgColor="#fff"
        placeholder="eg. Astronauts on the moon"
        sx={{ width: "200px" }}
      />
      <Select
        value={source}
        displayEmpty
        // @ts-ignore
        size="extraSmall"
        onChange={handleSourceChange}
        bgColor="#fff"
      >
        <MenuItem selected={source === "all"} value="all">
          <em>All Sources</em>
        </MenuItem>
        {sources.map((item) => (
          <MenuItem
            key={item.value}
            selected={source === item.value}
            value={item.value}
          >
            {item.title}
          </MenuItem>
        ))}
      </Select>
      <Select
        value={type}
        displayEmpty
        // @ts-ignore
        size="extraSmall"
        onChange={handleTypeChange}
        bgColor="#fff"
      >
        <MenuItem selected={source === "all"} value="all">
          <em>All Types</em>
        </MenuItem>
        {types.map((item) => (
          <MenuItem
            key={item.value}
            selected={source === item.value}
            value={item.value}
          >
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ImageFilters;
