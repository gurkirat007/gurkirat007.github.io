// import { useDispatch } from "react-redux";
import {
  getMediumData,
  selectCurrentTab,
  selectMediumData,
  setCurrentTab,
} from "../../slices/AppSlices";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { useEffect } from "react";
import classes from "./Blogs.module.less";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Hooks";
import ListBlogs from "./BlogTile";

export default function Blog() {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

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
    useAppSelector(selectCurrentTab),
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
