"use server";
import { getSectionsRequest } from "@/lib/services/section";
import { getPathname } from "@/lib/utils/server.util";
import { SectionType } from "@/types/section.types";
import { redirect } from "next/navigation";

const SectionPage = async () => {
  const pathname = getPathname();
  const { sections }: { sections: SectionType[] } = await getSectionsRequest();

  const sectionsExist = sections?.length > 0;

  console.log("sections from page", sections);

  if (pathname === "/dashboard/section" && sectionsExist) {
    redirect(`/dashboard/section/${sections[0].section_id}`);
  }
  return (
    <div>
      <h1>Sections page</h1>
    </div>
  );
};

export default SectionPage;
