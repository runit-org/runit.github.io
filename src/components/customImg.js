import Image from "next/image";

export const CustomImg = ({ path, alt, customStyle }) => {
  return (
    <Image
      priority={true}
      src={path}
      alt={alt}
      className={`${customStyle} w-full lg:w-1/2 my-8 rounded-xl`}
    />
  );
};
