"use server";
import { getSectionsRequest } from "@/lib/services/section";
import { getPathname } from "@/lib/utils/server.util";
import { GetSectionsResponse, SectionType } from "@/types/section.types";
import { redirect } from "next/navigation";

const SectionPage = async () => {
  const pathname = getPathname();
  const { response: sections }: GetSectionsResponse = await getSectionsRequest({
    grade: "all",
  });

  const sectionsExist = sections?.length > 0;

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
