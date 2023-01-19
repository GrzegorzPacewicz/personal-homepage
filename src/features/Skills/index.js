import { nanoid } from "@reduxjs/toolkit";
import { personalInfo } from "../personalInfo";
import SkillsTile from "../../common/SkillsTile";

function Skills() {
  return (
    <>
      {personalInfo.map((sectionInfo) => (
        <SkillsTile
          key={nanoid()}
          title={sectionInfo.title}
          icon={sectionInfo.icon}
          list={sectionInfo.list}
        />
      ))}
    </>
  );
}

export default Skills;
