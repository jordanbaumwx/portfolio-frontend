import Skills from './Skills';
import { useQuery } from 'react-query';
import { getBio } from '../../hooks/Bio';
import { Profile } from '../../types/Profile';

function Bio() {
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

  console.log(data);
  return (
    <section className="justify-center items-center place-content-center">
      <div className="flex flex-row min-w-screen justify-center items-center">
        <div className="w-3/4 flex flex-row min-w-screen rounded-3xl  bg-[#B23E58]">
          <div className="grid lg:grid-cols-12">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
              <img
                className="shadow-lg shadow-inherit rounded-l-3xl max-w-full h-auto align-middle border-none"
                src="https://pbs.twimg.com/profile_images/1609755984884387840/fJA4N8Po_400x400.jpg"
                alt="profile of Jordan Baumgardner"
              />
            </div>
            <div className="mr-auto place-self-center lg:col-span-7 ml-4 mt-2">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                <span className="bg-clip-text text-transparent  text-white ">
                  {data?.name}
                </span>
              </h1>
              <h4 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl">
                <span className="bg-clip-text text-transparent  text-white">
                  {data?.tagline}
                </span>
              </h4>
              <p className="max-w-2xl mb-6 font-medium text-white">
                {data?.bio}
              </p>

              {data?.Skills ? (
                <Skills skills={data?.Skills} />
              ) : (
                <div>Skills not found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
