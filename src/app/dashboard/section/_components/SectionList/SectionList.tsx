"use client";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import SectionListWrapper from "./style";
import Edit from "@mui/icons-material/Edit";
import Add from "@mui/icons-material/Add";
import { useState } from "react";
import AddSectionModal from "../AddSectionModal";
import { MenuNavLink } from "@/layout/navigation/VerticalNavLink";
import { usePathname } from "next/navigation";
import { SectionType } from "@/types/section.types";

interface Props {
  sections: SectionType[];
  addSection?: any;
}

const SectionList = ({ sections }: Props) => {
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<SectionType>();
  const pathname = usePathname();

  const handleClickAdd = () => {
    setAddModalOpen(true);
  };
  const handleClickEdit = (section: SectionType, event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveSection(section);
    setEditModalOpen(true);
  };

  return (
    <SectionListWrapper>
      <AddSectionModal
        headerText="Add Section"
        type="add"
        open={addModalOpen}
        setOpen={setAddModalOpen}
      />
      <AddSectionModal
        headerText="Edit Section"
        type="edit"
        open={editModalOpen}
        setOpen={setEditModalOpen}
        {...activeSection}
      />
      <List className="section-list">
        <ListSubheader className="section-list__header">
          <Typography fontWeight={600} variant="subtitle1" color="text.primary">
            Sections
          </Typography>
        </ListSubheader>
        {sections?.length > 0 ? (
          sections.map((item: SectionType) => (
            <ListItem key={item.section_id}>
              <MenuNavLink
                passHref
                href={
                  item.section_id === undefined
                    ? "/dashboard/section"
                    : `/dashboard/section/${item.section_id}`
                }
                className={
                  item?.section_id && pathname.includes(item.section_id)
                    ? "active"
                    : ""
                }
                sx={{ padding: 0, paddingLeft: "10px" }}
              >
                <ListItemText sx={{ textWrap: "wrap" }}>
                  {item.name}
                </ListItemText>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={(event) => handleClickEdit(item, event)}
                >
                  <Edit fontSize="small" htmlColor="#000" />
                </IconButton>
              </MenuNavLink>
            </ListItem>
          ))
        ) : (
          <Typography textAlign="center">No Sections</Typography>
        )}
        <ListSubheader
          className="section-list__footer"
          onClick={handleClickAdd}
        >
          <Add fontSize="small" htmlColor="#2A65BD" sx={{ mr: 1 }} />
          <Typography color="#2A65BD">Add New</Typography>
        </ListSubheader>
      </List>
    </SectionListWrapper>
  );
};

export default SectionList;
