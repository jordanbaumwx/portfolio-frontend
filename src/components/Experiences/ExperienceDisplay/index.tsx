import { Experience } from '../../../types/Experience';
import Description from './Description';
import Header from './Header';

const ExperienceDiv = (props: { experience: Experience }) => {
  return (
    <div className="">
      <Header
        className=""
        company={{
          name: props.experience.company,
          title: props.experience.title,
          logo: '',
        }}
      />
      <Description className="" duties={[]} />
    </div>
  );
};

export default ExperienceDiv;
