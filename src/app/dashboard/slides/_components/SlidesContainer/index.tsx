"use client";
import SlidesImage from "@/app/dashboard/slides/_components/SlidesImage";
import { Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import SlidesNav from "../SlidesNav";
import { AddSlideRequest } from "@/types/slides.types";
import { useParams } from "next/navigation";
import { addSlide, updateSlide } from "../../actions";

interface Props {
  slides: any[];
}

function SlidesContainer({ slides }: Props) {
  const [activeSlide, setActiveSlide] = useState<any>(null);
  const theme = useTheme();
  const params = useParams();
  const { topicId } = params;

  useEffect(() => {
    setActiveSlide(slides[0]);
  }, [slides]);

  const handleEditSubmit = async (e: any, callback?: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const question = formData.get("question") as string;
    const image_url = formData.get("image_url") as string;

    const payload: AddSlideRequest = {
      description,
      question,
      title,
      image_url,
      subtopic_id: topicId as string,
    };
    console.log("UPDATE Slide PAYLOAD", payload);
    const res = (await updateSlide(activeSlide?.slide_id, payload)) as any;
    console.log("RESPONSE ADD SLIDE", res);
    if (res?.error) {
      console.log("failed to create slide", res?.error);
    } else {
      if (typeof callback === "function") {
        callback();
      }
    }
  };
  const handleAddSubmit = async (e: any, callback?: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const question = formData.get("question") as string;
    const image_url = formData.get("image_url") as string;

    const payload: AddSlideRequest = {
      description,
      question,
      title,
      image_url,
      subtopic_id: topicId as string,
    };
    console.log("Add Slide PAYLOAD", payload);
    const res = (await addSlide(payload)) as any;
    console.log("RESPONSE ADD SLIDE", res);
    if (res?.error) {
      console.log("failed to create slide", res?.error);
    } else {
      if (typeof callback === "function") {
        callback();
      }
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }} height="100%">
      <Grid container height="100%">
        <Grid
          xs={4}
          height="100%"
          borderRight={`1px solid ${theme.palette.primary.main}`}
        >
          <SlidesNav
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            slides={slides}
            handleEditSubmit={handleEditSubmit}
            handleAddSubmit={handleAddSubmit}
          />
        </Grid>
        <Grid xs={8} height="100%">
          <SlidesImage slide={activeSlide} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SlidesContainer;
