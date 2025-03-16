import { Burger } from "@mantine/core";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Hooks";
import {
  selectIsImgFullScreen,
  selectShowNavBar,
  setImgFullScreen,
  setShowNavBar,
} from "../../slices/AppSlices";
import { BasePageProps } from "../../Typings/interfaces";
import BackgroundImageComponent from "../BackgroundImage/BackgroundImage";
import BottomBox from "../BottomBox/BottomBox";
import { Header } from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import classes from "./BasePage.module.less";
import {
  useDisclosure,
  useMediaQuery,
} from "@mantine/hooks";
import { theme } from "../../theme";
import { useEffect } from "react";
import SocialIconsGroup from "../SocialsIconGroup/SocialsIconGroup";

export default function BasePage({
  content,
}: BasePageProps) {
  const showNavBar = useAppSelector(
    selectShowNavBar,
  );
  const isFullScreen = useAppSelector(
    selectIsImgFullScreen,
  );
  const isMobile = useMediaQuery(
    `(max-width: ${theme.breakpoints?.md})`,
  );

  const isLessThanLarge = useMediaQuery(
    `(max-width: ${theme.breakpoints?.lg})`,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMobile === true) {
      dispatch(setImgFullScreen(false));
    }
  }, [isMobile, dispatch]);
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
      <SocialIconsGroup />
      <div
        className={classes.navBarButton}
      >
        <Burger
          classNames={{
            root: classes.burger,
          }}
          opened={opened}
          onClick={toggle}
        />
      </div>
      {showNavBar && <NavBar />}
      <div
        className={classes.rightSection}
      >
        {!isMobile &&
          !isLessThanLarge && (
            <div
              className={classes.header}
            >
              <Header />
            </div>
          )}

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
      {!isMobile && (
        <div
          className={classes.bottomBox}
        >
          <BottomBox />
        </div>
      )}
    </div>
  );
}
