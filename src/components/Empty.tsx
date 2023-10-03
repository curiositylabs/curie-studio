"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const IMAGES = [
  "/empty-dog-2.png",
  "/empty-dog-3.png",
  "/empty-dog-4.png",
  "/empty-dog-5.png",
  "/empty-dog-7.png",
];

function Empty({ title = "Not found" }: { title?: string }) {
  const pathname = usePathname();
  const image = useMemo(() => {
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
  }, [pathname]);

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop={3}
    >
      <Image
        priority
        alt="Empty"
        src={image}
        width={400}
        height={400}
        quality={100}
      />
      <h2>{title}</h2>
    </Box>
  );
}

export default Empty;
