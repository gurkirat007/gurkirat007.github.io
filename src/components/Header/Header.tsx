import {
  Burger,
  Container,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.less";
import { useNavigate } from "react-router-dom";
import { navBarLinks } from "../../Typings/AppConstants";
import {
  selectCurrentTab,
  selectIsImgFullScreen,
  setCurrentTab,
  // selectShowNavBar,
} from "../../slices/AppSlices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Hooks";
// import { useDispatch } from "react-redux";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(
    selectCurrentTab,
  );
  const isFulllScreen = useAppSelector(
    selectIsImgFullScreen,
  );
  // const showNavBar = useAppSelector(selectShowNavBar);

  const [opened, { toggle }] =
    useDisclosure(false);

  const items = navBarLinks.map(
    (link, idx) => (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={
          activeTab.link ===
            link.link || undefined
        }
        onClick={(event) => {
          event.preventDefault();
          navigate(link.link);
          dispatch(
            setCurrentTab(
              navBarLinks[idx],
            ),
          );
        }}
      >
        {link.label}
      </a>
    ),
  );

  return (
    <header
      className={`${classes.header} ${
        isFulllScreen
          ? classes.fullscreen
          : ""
      }`}
    >
      <Container
        size="md"
        className={classes.inner}
      >
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="xs"
          size="sm"
        />
        {/* <div className={classes.navBarButton}>
          <NavBarButton />
        </div> */}
      </Container>
    </header>
  );
}
