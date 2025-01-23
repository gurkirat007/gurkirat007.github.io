import { useAppSelector } from "../../Hooks";
import { selectShowNavBar } from "../../slices/AppSlices";
import { BasePageProps } from "../../Typings/interfaces";
import BackgroundImageComponent from "../BackgroundImage/BackgroundImage";
import BottomBox from "../BottomBox/BottomBox";
import { Header } from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import classes from "./BasePage.module.less";

export default function BasePage({ content }: BasePageProps) {
  const showNavBar = useAppSelector(selectShowNavBar);
  return (
    <div className={classes.pageContainer}>
      <div className={classes.backgroundImageComponent}>
        <BackgroundImageComponent />
      </div>
      <div className={classes.rightSection}>
        <div className={classes.header}>
          <Header />
        </div>
        {showNavBar && <NavBar />}
        <div className={classes.contentContainer}>{content}</div>
      </div>
      <div className={classes.bottomBox}>
        <BottomBox />
      </div>
    </div>
  );
}
