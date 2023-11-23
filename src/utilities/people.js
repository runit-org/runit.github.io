import { UserImg } from "@/components/userImg";

export const People = () => {
  return [
    {
      userName: "Julian Tjiong",
      title: "Backend Developer",
      img: (
        <UserImg
          alt="JT"
          url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
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
          url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
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
