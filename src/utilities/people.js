import { UserImg } from "@/components/userImg";

export const People = () => {
  return [
    {
      userName: "Julian Tjiong",
      title: "Backend Developer",
      img: (
        <UserImg
          alt="JT"
          url="https://www.gravatar.com/avatar/20e5d0492e809825a933ce13a8d60ae9280426a7eb27e28f9df7df3854835fc6?d=retro"
        />
      ),
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque. amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
      lowerContent: [
        {
          title: "Published",
          content: "31st June, 2021",
        },
        {
          title: " Reading time",
          content: "3 minute",
        },
      ],
    },
    {
      userName: "Manan Lodhia",
      title: "Frontend Developer",
      img: (
        <UserImg
          alt="ML"
          url="https://www.gravatar.com/avatar/cb4203acd8d92059e616586de833527957174c9850d98260242492026188cc80?d=retro"
        />
      ),
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque. amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
      lowerContent: [
        {
          title: "Published",
          content: "31st June, 2021",
        },
        {
          title: " Reading time",
          content: "3 minute",
        },
      ],
    },
  ];
};
