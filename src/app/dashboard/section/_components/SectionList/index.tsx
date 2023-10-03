"use server";
import SectionList from "./SectionList";
import { getSectionsRequest } from "@/lib/services/section";

const SectionListContainer = async () => {
  let sections = [];
  try {
    const data = await getSectionsRequest();
    sections = data?.sections || [];
  } catch (error) {
    console.log("ERROR in SectionList/index", error);
  }

  return <SectionList sections={sections} />;
};

export default SectionListContainer;
