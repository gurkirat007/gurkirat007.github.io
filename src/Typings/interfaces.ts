import { ReactNode } from "react";
import { NavBarButtonTypes, RoutePaths } from "./enums";

export interface NavBarLink{
    link: RoutePaths,
    label: NavBarButtonTypes
}

export interface BasePageProps{
    content: ReactNode
}

export interface FormInputs {
    name: string;
    email: string;
    message: string;
    //   [key: string]: any; // If additional dynamic fields are present
  }

  export interface ResumeSectionProps {
    contents: ResumeSectionContent[]; // Define the prop type
    heading:string;
}

  export interface ResumeSectionContent {
    // { name: "abc", timeline: "bcd", description: "def" },
    name: string;
    timeline:string;
    description:string;
    company: string;
  }