import { ImageListItem, useTheme } from "@mui/material";
import MUIImageList from "@mui/material/ImageList";

export default function ImageList({
  images,
  currentImage,
  setActiveImage,
  activeImage,
}: any) {
  const theme = useTheme();

  const handleClickImage = (image: any) => {
    setActiveImage(image);
  };
  return (
    <MUIImageList
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr)) !important",
        gridAutoColumns: "minmax(200px, 1fr)",
        width: "100%",
        paddingTop: 1,
        paddingBottom: 3,
        paddingX: 2,
        marginTop: "5px",
        marginBottom: "0px",
        flex: "none",
      }}
      gap={10}
    >
      <ImageListItem
        sx={{
          cursor: "pointer",
          boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.1)",
          border:
            activeImage === currentImage
              ? `3px solid ${theme.palette.secondary.dark}`
              : "none",
        }}
        onClick={() => handleClickImage(currentImage)}
      >
        <img src={currentImage} alt="image" />
      </ImageListItem>
      {images?.map((image: string, index: number) => (
        <ImageListItem
          key={index}
          sx={{
            cursor: "pointer",
            boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.1)",
            border:
              activeImage === image
                ? `3px solid ${theme.palette.secondary.dark}`
                : "none",
          }}
          onClick={() => handleClickImage(image)}
        >
          <img src={image} alt="image" />
        </ImageListItem>
      ))}
    </MUIImageList>
  );
}
