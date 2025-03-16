import { Burger } from "@mantine/core";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Hooks";
import {
  selectIsImgFullScreen,
  selectShowNavBar,
  setShowNavBar,
} from "../../slices/AppSlices";
import { BasePageProps } from "../../Typings/interfaces";
import BackgroundImageComponent from "../BackgroundImage/BackgroundImage";
import BottomBox from "../BottomBox/BottomBox";
import { Header } from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import classes from "./BasePage.module.less";
import { useDisclosure } from "@mantine/hooks";
// import { useDispatch } from "react-redux";

export default function BasePage({
  content,
}: BasePageProps) {
  const showNavBar = useAppSelector(
    selectShowNavBar,
  );
  const isFullScreen = useAppSelector(
    selectIsImgFullScreen,
  );
  const dispatch = useAppDispatch();
  const [opened, { toggle }] =
    useDisclosure(false, {
      onOpen: () =>
        dispatch(setShowNavBar(true)),
      onClose: () =>
        dispatch(setShowNavBar(false)),
    });
  return (
    <div
      className={classes.pageContainer}
    >
      <div
        className={`${
          classes.backgroundImageComponent
        } ${
          isFullScreen
            ? classes.fullscreen
            : ""
        }`}
      >
        <BackgroundImageComponent />
      </div>
      <div
        className={classes.rightSection}
      >
        <div
          className={
            classes.navBarButton
          }
        >
          {/* <NavBarButton /> */}
          <Burger
            classNames={{
              root: classes.burger,
            }}
            opened={opened}
            onClick={toggle}
          />
        </div>
        <div className={classes.header}>
          <Header />
        </div>
        {showNavBar && <NavBar />}
        {!isFullScreen && (
          <div
            className={
              classes.contentContainer
            }
          >
            {content}
          </div>
        )}
      </div>
      <div
        className={classes.bottomBox}
      >
        <BottomBox />
      </div>
    </div>
  );
}
