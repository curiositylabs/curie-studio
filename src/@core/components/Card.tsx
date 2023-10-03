import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EmptyDogImage from "../../../public/empty-dog.png";

const CircularIcon = styled(IconButton)(({ theme }) => ({
  borderRadius: "50%",
  backgroundColor: `${theme.palette.grey[600]} !important`,
  padding: "15px",
  width: theme.spacing(3),
  height: theme.spacing(3),
  position: "absolute",
  margin: "5px",
  top: 0,
  right: 0,
  zIndex: 1,
}));

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  topic_id?: string;
  name?: string;
  description?: string;
  image?: string;
  hasChildren?: boolean;
  onClick?: () => void;
}

export default function ContentCard(props: Props) {
  const { topic_id, name, description, image, hasChildren, onClick } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (event: any) => {
    event.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <CardActionArea onClick={onClick}>
      <Card
        variant="outlined"
        sx={{ minHeight: "206px", position: "relative", borderRadius: "0" }}
      >
        {hasChildren && (
          <CircularIcon disabled>
            <AccountTreeIcon
              aria-label="settings"
              htmlColor="#fff"
              fontSize="small"
            />
          </CircularIcon>
        )}
        <CardMedia
          component="img"
          height="140"
          image={image || "/empty-dog-card.png"}
          alt="green iguana"
        />
        <CardActions>
          {name && (
            <Typography component="p" fontWeight={600}>
              {name}
            </Typography>
          )}
          {description && (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          )}
        </CardActions>

        {description && (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography mb={0} fontSize="small" paragraph>
                {description}
              </Typography>
            </CardContent>
          </Collapse>
        )}
      </Card>
    </CardActionArea>
  );
}
