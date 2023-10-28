"use server";
import { GetSectionsResponse, SectionType } from "@/types/section.types";
import SectionList from "./SectionList";
import { getSectionsRequest } from "@/lib/services/section";

const SectionListContainer = async () => {
  let sections: SectionType[] = [];
  try {
    const { response }: GetSectionsResponse = await getSectionsRequest({
      grade: "all",
    });
    sections = response || [];
  } catch (error) {
    console.log("ERROR in SectionList/index", error);
  }

  return <SectionList sections={sections} />;
};

export default SectionListContainer;
