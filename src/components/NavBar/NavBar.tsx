import { useAppSelector } from "../../Hooks";
import { selectShowNavBar } from "../../slices/AppSlices";
import classes from "./NavBar.module.less";
import NavBarContainer from "./NavBarContainer";

export default function NavBar() {
  const showNavBar = useAppSelector(selectShowNavBar);
  return <div>{showNavBar ? <NavBarContainer /> : <NavBar />}</div>;
}
