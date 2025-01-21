import { ReactNode } from "react";
import { NavBarButtonTypes, RoutePaths } from "./enums";

export interface NavBarLink{
    link: RoutePaths,
    label: NavBarButtonTypes
}

export interface BasePageProps{
    content: ReactNode
}