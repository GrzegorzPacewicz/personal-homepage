import { nanoid } from "@reduxjs/toolkit";
import { personalInfo } from "../../core/personalInfo";
import SkillsTile from "./SkillsTile";

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
