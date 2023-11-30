export const Hero = (props) => {
  return (
    <div className={`App-hero ${props.height}`}>
      <div className="container">
        <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-5 sm:flex sm:items-center sm:justify-between">
          <div className="sm:w-1/2 w-full">
            <h2 className="block mb-4 text-3xl text-secondary sm:text-5xl">
              {props.title}
            </h2>
            <p className="block">{props.desc}</p>
          </div>
          <div className="justify-center sm:justify-end mt-8 flex lg:mt-0 sm:w-1/2 w-full lg:flex-shrink-0">
            <img
              src="/runitLarge.png"
              className={` ${props.logoWidth}`}
              alt="runit Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
