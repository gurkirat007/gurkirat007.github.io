import { Burger } from "@mantine/core";
import { useAppSelector } from "../../Hooks";
import { selectShowNavBar, setShowNavBar } from "../../slices/AppSlices";
import { BasePageProps } from "../../Typings/interfaces";
import BackgroundImageComponent from "../BackgroundImage/BackgroundImage";
import BottomBox from "../BottomBox/BottomBox";
import { Header } from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import NavBarButton from "../NavBar/NavBarButton";
import classes from "./BasePage.module.less";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch } from "react-redux";

export default function BasePage({ content }: BasePageProps) {
  const showNavBar = useAppSelector(selectShowNavBar);
  const dispatch = useDispatch();
  const [opened, { toggle }] = useDisclosure(false, {
    onOpen: () => dispatch(setShowNavBar(true)),
    onClose: () => dispatch(setShowNavBar(false)),
  });
  return (
    <div className={classes.pageContainer}>
      <div className={classes.backgroundImageComponent}>
        <BackgroundImageComponent />
      </div>
      <div className={classes.rightSection}>
        <div className={classes.navBarButton}>
          {/* <NavBarButton /> */}
          <Burger
            classNames={{ root: classes.burger }}
            opened={opened}
            onClick={toggle}
          />
        </div>
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
