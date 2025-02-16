import { useDispatch } from "react-redux";
import {
  getMediumData,
  selectMediumData,
  setCurrentTab,
} from "../../slices/AppSlices";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { useEffect } from "react";
import classes from "./Blogs.module.less";
import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { useAppSelector } from "../../Hooks";
import ListBlogs from "./BlogTile";

export default function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCurrentTab(
        navBarLinks[
          NavBarLinkIndex.Blog
        ],
      ),
    );
    dispatch(getMediumData());
  }, [
    dispatch,
    // useAppSelector(selectMediumData),
  ]);

  const mediumData = useAppSelector(
    selectMediumData,
  );
  console.log(mediumData);
  // dispatch(getMediumData());
  return (
    <div>
      <h3
        className={
          classes.contentSubHeading
        }
      >
        Blog
      </h3>
      <h1
        className={
          classes.contentHeading
        }
      >
        Latest Articles
      </h1>
      <ListBlogs />
    </div>
  );
}
