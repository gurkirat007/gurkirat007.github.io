import { ReactNode } from "react";
import {
  NavBarButtonTypes,
  RoutePaths,
} from "./enums";

export interface NavBarLink {
  link: RoutePaths;
  label: NavBarButtonTypes;
}

export interface BasePageProps {
  content: ReactNode;
}

export interface FormInputs {
  name: string;
  email: string;
  message: string;
  //   [key: string]: any; // If additional dynamic fields are present
}

export interface ResumeSectionProps {
  contents: ResumeSectionContent[]; // Define the prop type
  heading: string;
}

export interface ResumeSectionContent {
  // { name: "abc", timeline: "bcd", description: "def" },
  name: string;
  timeline: string;
  description: string;
  company: string;
}

export interface Project {
  // name: "b", description: "abc", skills: "cde", category: "abc", image:"abc"
  name: string;
  description: string;
  skills: string;
  category: string;
  image: string;
}

export interface MediumFeedInfo {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface MediumFeedItem {
  title: string;
  pubDate: string;
  link:string;
  guid:string;
  author:string;
  thumbnail:string;
  description:string;
  enclosure: {};
  categories: string[]
}

export interface MediumJson {
  status: string;
  feed: MediumFeedInfo;
  items: MediumFeedItem[];
}
