import {
  Container,
  Flex,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Header.module.less";
import { useNavigate } from "react-router-dom";
import { navBarLinks } from "../../Typings/AppConstants";
import {
  selectCurrentTab,
  selectIsImgFullScreen,
  setCurrentTab,
} from "../../slices/AppSlices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Hooks";
import { theme } from "../../theme";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(
    selectCurrentTab,
  );
  const isFulllScreen = useAppSelector(
    selectIsImgFullScreen,
  );
  const isLessThanLarge = useMediaQuery(
    `(max-width: ${theme.breakpoints?.lg})`,
  );

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
        <Flex
          gap={5}
          visibleFrom="xs"
          align={
            isLessThanLarge
              ? "normal"
              : "center"
          }
          direction={
            isLessThanLarge
              ? "column"
              : "row"
          }
        >
          {items}
        </Flex>
      </Container>
    </header>
  );
}
