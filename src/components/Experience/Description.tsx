function Description(props: { className: string }) {
  return (
    <div
      className={
        'flex flex-row min-w-screen justify-center items-center ' +
        props.className
      }
    >
      {/* Add a company image, followed by company name and then right align a date */}
      <div className="w-3/4 flex flex-row min-w-screen ph-4">
        <ul className="list-disc bg-[#252E42] p-4 rounded-xl text-xl">
          <li className="text-white ml-4">
            Guided software design decisions for weather instrumentation to
            bring a refreshed and modernized software product to market based on
            micro services and message queues.
          </li>
          <li className="text-white ml-4">
            Worked with customers on software changes and get feedback on design
            improvements and customer needs.
          </li>
          <li className="text-white ml-4">
            Used Go Programming Language, React, JavaScript, PostgreSQL and
            Python as code base foundation.
          </li>
          <li className="text-white ml-4">
            Learned Docker to help facilitate writing cross-platform code fast
            and efficiently without introducing Operating System complications.
          </li>
          <li className="text-white ml-4">
            Managed Amazon Web Services to facilitate a code build process and
            increase access security.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
