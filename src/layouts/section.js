export const Section = ({ children, cols }) => {
  return (
    <div className="container w-full mx-auto">
      <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-5 ">
        <div
          className={`grid ${
            cols === 2 ? "lg:grid-cols-2" : cols === 3 ? "lg:grid-cols-3" : ""
          } sm:gap-x-32 text-start items-center`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
