import { useParams } from "react-router-dom";
import { projects } from "../../content/projects";
import { useAppSelector } from "../../Hooks";
import {
  getMediumData,
  selectMediumData,
} from "../../slices/AppSlices";
import RichText from "../../components/RichText/RichText";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./Blogs.module.less";

export default function BlogContent() {
  const { key } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMediumData());
  }, [dispatch]);
  const mediumBlog = useAppSelector(
    selectMediumData,
  )?.items[Number(key)];

  return (
    <>
      <h1
        className={
          classes.contentHeading
        }
      >
        {mediumBlog?.title}
      </h1>
      <div
        className={classes.blogsContent}
      >
        <RichText
          className="blog-description"
          htmlContent={
            mediumBlog?.description
          }
        />
      </div>
    </>
  );
}
