import { nanoid } from "@reduxjs/toolkit";
import { personalInfo } from "../../common/personalInfo";
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
