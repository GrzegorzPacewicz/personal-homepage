import { nanoid } from "@reduxjs/toolkit";
import { personalInfo } from "../personalInfo";
import SkillsTile from "./SkillsTile";

const Skills = () => {
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
