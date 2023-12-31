import styles from "@/styles/Home.module.scss";

export const UserCard = ({
  userName,
  img,
  title,
  description,
  lowerContent,
}) => {
  return (
    <span className={`${styles.card} p-6 lg:p-4`}>
      <div className="sm:flex sm:justify-start sm:gap-4">
        <div className="hidden sm:block sm:shrink-0">{img}</div>
        <div>
          <h4 className="text-lg font-bold text-gray-900 sm:text-xl">
            {userName}
          </h4>

          <p className="mt-1 text-xs font-medium text-gray-600">{title}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[55ch] text-sm text-gray-500">{description}</p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        {lowerContent.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <dt className="text-sm font-medium text-gray-600">
                <a href={item.link} target="_blank">
                  {item.title}
                </a>
              </dt>
              {/* <dd className="text-xs text-gray-500">{item.content}</dd> */}
            </div>
          );
        })}
      </dl>
    </span>
  );
};
