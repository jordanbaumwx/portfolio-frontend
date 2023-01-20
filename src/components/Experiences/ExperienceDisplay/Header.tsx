function Header(props: {
  className: string;
  company: {
    name: string;
    title: string;
    logo: string;
  };
}) {
  return (
    <div
      className={
        'flex flex-row min-w-screen justify-center items-center' +
        props.className
      }
    >
      {/* Add a company image, followed by company name and then right align a date */}
      <div className="w-3/4 flex flex-row min-w-screen p-4">
        <img
          className="w-12 h-12 left-0 top-0 rounded-full"
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/yipswzs1rezhuwoth9tm"
          alt="Jordan Baumgardner"
        />

        {/* Make a inline span */}
        <div className="inline-block align-text-top ">
          <h3 className="text-white text-4xl font-bold ml-2 inline-block mx-4">
            {props.company.name}
          </h3>
          <h3 className="text-white text-2xl  font-medium ml-auto inline-block">
            {props.company.title}
          </h3>
        </div>

        <h3 className="text-white text-xl font-light ml-auto">
          Jan '22 - Jan '23
        </h3>
      </div>
    </div>
  );
}

export default Header;
