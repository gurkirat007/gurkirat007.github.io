import { AppState } from "../slices/AppSlices";
import { NavBarButtonTypes, NavBarLinkIndex, RoutePaths } from "./enums";
import { MediumJson, NavBarLink, ResumeSectionContent } from "./interfaces";

export const navBarLinks: NavBarLink[] = [
  { link: RoutePaths.Home, label: NavBarButtonTypes.Home },
  { link: RoutePaths.Resume, label: NavBarButtonTypes.Resume },
  { link: RoutePaths.Portfolio, label: NavBarButtonTypes.Portfolio },
  { link: RoutePaths.Blog, label: NavBarButtonTypes.Blog },
  { link: RoutePaths.Contact, label: NavBarButtonTypes.Contact },
];

export const initialAppState: AppState = {
  currentTab: navBarLinks[NavBarLinkIndex.Home],
  showNavBar: false,
  mediumData: undefined,
  isLoading: false
};

export const resumeExperience: ResumeSectionContent[] = [
  { name: "Software Development Engineer", company: "Mastercard", timeline: "bcd", description: "Contributed to Mastercard’s Customer Data Enhancement application, which enriches customer data with insights into spending behavior to help retain high-value customers, reactivate churned segments, and boost loyalty. Enhanced backend functionality using Java Spring Boot, ensuring high-quality code through best practices and rigorous reviews, and updated the frontend for compatibility with platform requirements. The application serves both internal users and external clients, delivering seamless operations and actionable insights."},
  { name: "Summer Intern", company: "Mastercard", timeline: "bcd", description: "Proficiently contributed to the development of cutting-edge Consumer Credit Analytics Application and Small Business Credit Analytics, leveraging the dynamic capabilities of Spring Boot and React framework. Spearheaded the design and implementation of innovative features, ensuring the seamless integration of advanced analytics and intuitive user interfaces." },
];

export const education: ResumeSectionContent[] = [
  { name: "Software Development Engineer", company: "Mastercard", timeline: "bcd", description: "Contributed to Mastercard’s Customer Data Enhancement application, which enriches customer data with insights into spending behavior to help retain high-value customers, reactivate churned segments, and boost loyalty. Enhanced backend functionality using Java Spring Boot, ensuring high-quality code through best practices and rigorous reviews, and updated the frontend for compatibility with platform requirements. The application serves both internal users and external clients, delivering seamless operations and actionable insights."},
  { name: "Summer Intern", company: "Mastercard", timeline: "bcd", description: "Proficiently contributed to the development of cutting-edge Consumer Credit Analytics Application and Small Business Credit Analytics, leveraging the dynamic capabilities of Spring Boot and React framework. Spearheaded the design and implementation of innovative features, ensuring the seamless integration of advanced analytics and intuitive user interfaces." },
];

export const publications: ResumeSectionContent[] = [
  { name: "Software Development Engineer", company: "Mastercard", timeline: "bcd", description: "Contributed to Mastercard’s Customer Data Enhancement application, which enriches customer data with insights into spending behavior to help retain high-value customers, reactivate churned segments, and boost loyalty. Enhanced backend functionality using Java Spring Boot, ensuring high-quality code through best practices and rigorous reviews, and updated the frontend for compatibility with platform requirements. The application serves both internal users and external clients, delivering seamless operations and actionable insights."},
  { name: "Summer Intern", company: "Mastercard", timeline: "bcd", description: "Proficiently contributed to the development of cutting-edge Consumer Credit Analytics Application and Small Business Credit Analytics, leveraging the dynamic capabilities of Spring Boot and React framework. Spearheaded the design and implementation of innovative features, ensuring the seamless integration of advanced analytics and intuitive user interfaces." },
];


export const myInfo = [
  {key: "Degree", value: "Bachelors"},
  {key: "Website", value: "www.gurkiratsingh.xyz"},
  {key: "Mail", value: "gurkirat.singh.nitw@gmail.com"},
  {key: "Phone", value: "+919988801802"},
  {key: "Linkedin", value: "/gurkiratsingh007"},
  {key: "Instagram", value: "_gurkirat_singh007"},
]

