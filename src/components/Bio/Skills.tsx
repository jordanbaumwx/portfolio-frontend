import { Skill } from '../../types/Skill';
import SkillBadge from '../SkillBadge';

function Skills(props: { skills: Skill[] }) {
  return (
    <div className="grid auto-cols-max  grid-cols-4 auto-rows-max flex-row min-w-screen justify-center items-center ">
      {props.skills.map((skill) => (
        <SkillBadge
          name={skill.name}
          iconURL="https://img.icons8.com/color/48/000000/typescript.png"
          link="https://www.typescriptlang.org/"
        />
      ))}
    </div>
  );
}

export default Skills;
