import Button from "@/@core/components/Button";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

interface Props {
    title: string;
    buttonText?: string;
    onClickCreate?: () => void;
}

export default function TitleHeader({title, onClickCreate, buttonText}: Props) {
    return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={3}
        >
          <Typography variant="h5" fontWeight={600}>
            {title}
          </Typography>
          <Button variant="contained" color="warning" onClick={onClickCreate} startIcon={<Add />}>
            {buttonText}
          </Button>
        </Box>
    )
}