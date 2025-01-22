import { BasePageProps } from "../../Typings/interfaces";
import BackgroundImageComponent from "../BackgroundImage/BackgroundImage";
import BottomBox from "../BottomBox/BottomBox";
import { Header } from "../Header/Header";
import classes from "./BasePage.module.css";

export default function BasePage({ content }: BasePageProps) {
  return (
    <div className={classes.pageContainer}>
      <div className={classes.backgroundImageComponent}>
        <BackgroundImageComponent />
      </div>
      <div className={classes.rightSection}>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.contentContainer}>{content}</div>
      </div>
      <div className={classes.bottomBox}>
        <BottomBox />
      </div>
    </div>
  );
}
