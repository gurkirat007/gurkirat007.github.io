import { AppState } from "../slices/AppSlices";
import {
  NavBarButtonTypes,
  NavBarLinkIndex,
  RoutePaths,
} from "./enums";
import {
  NavBarLink,
  ResumeSectionContent,
} from "./interfaces";

export const navBarLinks: NavBarLink[] =
  [
    {
      link: RoutePaths.Home,
      label: NavBarButtonTypes.Home,
    },
    {
      link: RoutePaths.Resume,
      label: NavBarButtonTypes.Resume,
    },
    {
      link: RoutePaths.Portfolio,
      label:
        NavBarButtonTypes.Portfolio,
    },
    {
      link: RoutePaths.Blog,
      label: NavBarButtonTypes.Blog,
    },
    {
      link: RoutePaths.Contact,
      label: NavBarButtonTypes.Contact,
    },
  ];

export const initialAppState: AppState =
  {
    currentTab:
      navBarLinks[NavBarLinkIndex.Home],
    showNavBar: false,
    mediumData: undefined,
    isLoading: false,
    projectsData: []
  };

export const resumeExperience: ResumeSectionContent[] =
  [
    {
      name: "Software Development Engineer",
      company: "Mastercard",
      timeline: "June 2024 - present",
      description:
        "Contributed to Mastercard’s Customer Data Enhancement application, which enriches customer data with insights into spending behavior to help retain high-value customers, reactivate churned segments, and boost loyalty. Enhanced backend functionality using Java Spring Boot, ensuring high-quality code through best practices and rigorous reviews, and updated the frontend for compatibility with platform requirements. The application serves both internal users and external clients, delivering seamless operations and actionable insights.",
    },
    {
      name: "Summer Intern",
      company: "Mastercard",
      timeline: "May 2023 - July 2023",
      description:
        "Proficiently contributed to the development of cutting-edge Consumer Credit Analytics Application and Small Business Credit Analytics, leveraging the dynamic capabilities of Spring Boot and React framework. Spearheaded the design and implementation of innovative features, ensuring the seamless integration of advanced analytics and intuitive user interfaces.",
    },
  ];

export const education: ResumeSectionContent[] =
  [
    {
      name: "Bachelor Of Technology, Computer Science ",
      company:
        "National Institute of Technology, Warangal, India",
      timeline:
        "November 2020 - June 2024",
      description:
        "Spent four years focusing on holistic development, balancing rigorous learning with practical experience. Throughout my academic journey, I honed my technical skills while also developing problem-solving, collaboration, and adaptability—essential traits for a dynamic career in software engineering. Engaging in projects, coding challenges, and team activities helped me build a strong foundation in both theoretical concepts and real-world applications.",
    },
  ];

export const publications: ResumeSectionContent[] =
  [
    {
      name: "Object Detection and Classification in FWMAVs for Smart Pollination",
      company:
        "2022 IEEE International Symposium on Smart Electronic Systems (iSES)",
      timeline: "December 2022",
      description:
        "Object Detection and Classification algorithms are necessary for Smart Pollination by FWMAVs(Flapping-Wing Micro Aerial Vehicles). The FWMAVs would need to recognise flowers and navigate towards them. Due to the extremely low limitations on size, power consumption and weight, heavy machine learning models could not be developed to run on small microcontroller chips due to heavy resource consumption and low speed. In this research, we try to overcome this problem by having the FWMAV stream the video in real-time to a server and have the object detection algorithms run online. We implement this in two ways and compare them. In the first one, we directly upload the stream without processing, and in the second, we compress the data before uploading. We compare both methods on the basis of accuracy and performance. We conclude that the former is ideal for crispier data and an environment with lower latency. The latter is advisable for those areas where network has high latency and less data transfer is feasible.",
    },
    {
      name: "PTSD in the wild: a video database for studying post-traumatic stress disorder recognition in unconstrained environments",
      company:
        "Springer nature, Multimedia Tools and Applications",
      timeline: "October 2023",
      description:
        'POST-traumatic stress disorder (PTSD) is a chronic and debilitating mental condition that is developed in response to catastrophic life events, such as military combat, sexual assault, and natural disasters. PTSD is characterized by flashbacks of past traumatic events, intrusive thoughts, nightmares, hypervigilance, and sleep disturbance, all of which affect a person’s life and lead to considerable social, occupational, and interpersonal dysfunction. The diagnosis of PTSD is done by medical professionals using self-assessment questionnaire of PTSD symptoms as defined in the Diagnostic and Statistical Manual of Mental Disorders (DSM). In this paper, and for the first time, we collected, annotated, and prepared for public distribution a new video database for automatic PTSD diagnosis, called PTSD-in-the-wild dataset. The database exhibits “natural" and big variability in acquisition conditions with different pose, facial expression, lighting, focus, resolution, age, gender, race, occlusions and background. In addition to describing the details of the dataset collection, we provide a benchmark for evaluating machine learning-based approaches on PTSD-in-the-wild dataset. In addition, we propose and we evaluate a deep learning-based approach for PTSD detection in respect to the given benchmark. The proposed approach shows very promising results. Interested researcher can download a copy of PTSD-in-the wild dataset from http://www.lissi.fr/PTSD-Dataset/.',
    },
  ];

export const volunteering: ResumeSectionContent[] =
  [
    {
      name: "Robotics Club",
      company: "NIT Warangal",
      timeline:
        "January 2021 - May 2024",
      description:
        "During my university years, I played a key role in expanding a small robotics community into a thriving group of enthusiasts. I led technical sessions on ROS, organized large-scale events, and spearheaded various projects—some even featured on local television. Notable projects included a flower-dropping drone for Republic Day, a fruit-plucking and storage robot, a symbol-drawing robot, and a maze-solving robot.",
    },
    {
      name: "Placement cell coordinator",
      company: "NIT Warangal",
      timeline: "October 2023",
      description:
        "I actively contributed to campus recruitment efforts by organizing and coordinating various drives. Collaborating with fellow members, I helped provide students with valuable career resources and guidance. Additionally, I facilitated connections with potential employers through resume workshops, mock interviews, and networking events.",
    },
    {
      name: "Computer Science Engineering Society",
      company: "NIT Warangal",
      timeline: "October 2023",
      description: "I co-led the Event Conduction and Coordination team, overseeing a group of members to successfully organize large-scale events. I collaborated with similar associations from other universities, helping to host a tri-institute hackathon that saw significant participation.",
    },
  ];

export const myInfo = [
  { key: "Degree", value: "Bachelors" },
  {
    key: "Website",
    value: "www.gurkiratsingh.xyz",
  },
  {
    key: "Mail",
    value:
      "gurkirat.singh.nitw@gmail.com",
  },
  {
    key: "Phone",
    value: "+919988801802",
  },
  {
    key: "Linkedin",
    value: "/gurkiratsingh007",
  },
  {
    key: "Instagram",
    value: "_gurkirat_singh007",
  },
];
