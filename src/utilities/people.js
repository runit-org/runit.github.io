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
        "Meet Julian Tjiong, our accomplished backend-fullstack developer. With expertise in various programming languages and frameworks, Julian played a pivotal role in shaping runit. On runit, he worked with Python-Django and MySQL for robust RESTful API development, utilizing additional dependencies such as Selenium, Celery, etc for a seamless backend experience. Julian is also responsible for deploying runit, leveraging DigitalOcean cloud architecture for enhanced stability and performance.",
      lowerContent: [
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/juliantj/",
          // content: "31st June, 2021",
        },
        {
          title: "Github",
          link: "https://github.com/juliantjg",
          // content: "3 minute",
        },
        {
          title: "Email",
          link: "mailto:juliantj88@gmail.com",
          // content: "3 minute",
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
        "Meet Manan Lodhia, our skilled frontend-fullstack developer. With a rich background in multiple programming languages and frameworks, Manan brings a unique perspective to runit. runit, meticulously crafted and designed by him, utilizes React.js+Redux and various packages for a robust and seamless frontend. Leveraging technologies like Express, Sockets.io, and routers, Manan ensures a dynamic user experience. The frontend is rigorously automated tested using Cypress, ensuring a robust interaction with the backend API and beyond.",
      lowerContent: [
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/mananlodhia/",
          // content: "31st June, 2021",
        },
        {
          title: "Github",
          link: "https://github.com/mananlodhia1",
          // content: "3 minute",
        },
        {
          title: "Email",
          link: "mailto:mananlodhia@hotmail.com",
          // content: "3 minute",
        },
      ],
    },
  ];
};
