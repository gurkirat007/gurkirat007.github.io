import { AppState } from "../slices/AppSlices";
import { NavBarButtonTypes, NavBarLinkIndex, RoutePaths } from "./enums";
import { NavBarLink } from "./interfaces";

export const navBarLinks: NavBarLink[] = [
  { link: RoutePaths.Home, label: NavBarButtonTypes.Home },
  { link: RoutePaths.Resume, label: NavBarButtonTypes.Resume },
  { link: RoutePaths.About, label: NavBarButtonTypes.About },
  { link: RoutePaths.Blog, label: NavBarButtonTypes.Blog },
  { link: RoutePaths.Contact, label: NavBarButtonTypes.Contact },
];

export const initialAppState: AppState = {
  currentTab: navBarLinks[NavBarLinkIndex.Home],
};
