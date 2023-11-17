export const Section = ({ children, cols }) => {
  return (
    <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-16">
      <div
        className={`grid lg:grid-cols-${cols} sm:gap-x-32 text-start items-center`}
      >
        {children}
      </div>
    </div>
  );
};
