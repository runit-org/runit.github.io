export const UserImg = ({ url, alt }) => {
  return (
    <img
      alt={alt}
      src={url}
      className="h-16 w-16 rounded-lg object-cover shadow-sm"
    />
  );
};
