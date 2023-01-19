import Skill from '../Skill';

function Skills() {
  return (
    <div className="grid auto-cols-max  grid-cols-4 auto-rows-max flex-row min-w-screen justify-center items-center ">
      <Skill
        name="TypeScript"
        iconURL="https://img.icons8.com/color/48/000000/typescript.png"
        link="https://www.typescriptlang.org/"
      />
      <Skill
        name="React"
        iconURL="https://img.icons8.com/color/48/000000/react-native.png"
        link="https://reactjs.org/"
      />
      <Skill
        name="Python"
        iconURL="https://img.icons8.com/color/48/000000/python.png"
        link="https://www.python.org/"
      />
      <Skill
        name="NodeJS"
        iconURL="https://img.icons8.com/color/48/000000/nodejs.png"
        link="https://www.node.org/"
      />
      <Skill
        name="AWS"
        iconURL="https://img.icons8.com/color/48/000000/amazon-web-services.png"
        link="https://www.aws.com/"
      />
      <Skill
        name="Terraform"
        iconURL="https://img.icons8.com/color/48/000000/terraform.png"
        link="https://www.terraform.io/"
      />
      <Skill
        name="Go"
        iconURL="https://img.icons8.com/color/48/000000/golang.png"
        link="https://golang.org/"
      />
      <Skill
        name="PostgreSQL"
        iconURL="https://img.icons8.com/color/48/000000/postgreesql.png"
        link="https://www.postgresql.org/"
      />
      <Skill
        name="Docker"
        iconURL="https://img.icons8.com/color/48/000000/docker.png"
        link="https://www.docker.com/"
      />
      <Skill
        name="Swift"
        iconURL="https://img.icons8.com/color/48/000000/swift.png"
        link="https://www.swift.org/"
      />
      <Skill
        name="Git"
        iconURL="https://img.icons8.com/color/48/000000/git.png"
        link="https://www.git-scm.com/"
      />
      <Skill
        name="GitHub"
        iconURL="https://img.icons8.com/color/48/000000/github--v1.png"
        link="https://www.github.com/"
      />
    </div>
  );
}

export default Skills;
