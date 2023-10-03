import SlidesImageContainer from "./style";
import ImageList from "./ImageList";
import { Box, Typography } from "@mui/material";
import ImageFilters from "./ImageFilters";
import { useEffect, useState } from "react";
import Empty from "@/components/Empty";

interface Props {
  slide: any;
}

const images_data: any[] = [];

function SlidesImage({ slide }: Props) {
  const [activeImage, setActiveImage] = useState("");
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    setActiveImage(slide?.image_url);
  }, [slide]);

  useEffect(() => {
    setImages(images_data);
  }, []);

  return (
    <SlidesImageContainer
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      overflow="auto"
    >
      <Box p={3} flex="1" overflow="auto" width="100%" textAlign="center">
        <Typography marginBottom={1} textAlign="center">
          {slide?.title}
        </Typography>
        {activeImage ? (
          <img alt="sample image" src={activeImage} height="90%" />
        ) : (
          <Empty title="Image not found" />
        )}
      </Box>
      <ImageFilters />
      {images?.length > 0 ? (
        <ImageList
          currentImage={slide?.image}
          activeImage={activeImage}
          images={images}
          setActiveImage={setActiveImage}
        />
      ) : (
        <Typography paddingY={3}>Images not found</Typography>
      )}
    </SlidesImageContainer>
  );
}

export default SlidesImage;
