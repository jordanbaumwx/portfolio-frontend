import { useQuery } from 'react-query';
import { getBio } from '../../hooks/Bio';
import { Experience } from '../../types/Experience';
import { Profile } from '../../types/Profile';
import ExperienceDiv from './ExperienceDisplay';

function Experiences() {
  const { isLoading, isError, data, error } = useQuery<Profile, Error>(
    'bio',
    getBio
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {data?.Experience ? (
        data.Experience.map((experience: Experience) => (
          <ExperienceDiv experience={experience} />
        ))
      ) : (
        <div>Experiences not found</div>
      )}
    </div>
  );
}

export default Experiences;
