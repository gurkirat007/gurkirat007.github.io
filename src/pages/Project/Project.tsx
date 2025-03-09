import { useParams } from "react-router-dom";
import { projects } from "../../content/projects";
import classes from "./Project.module.less";
import { Image } from "@mantine/core";
import RichText from "../../components/RichText/RichText";

export default function Project() {
  const { key } = useParams();
  const {
    name,
    description,
    skills,
    category,
    image,
  } = projects[key ?? ""];

  return (
    <div>
      <div>
        <h3
          className={
            classes.contentSubHeading
          }
        >
          Project
        </h3>
        <h1
          className={
            classes.contentHeading
          }
        >
          {name}
        </h1>
      </div>
      <Image src={image} />
      <RichText
        className={
          classes.contentParagraph
        }
        htmlContent={description}
      />
      <p>
        <span
          className={
            classes.contentParagraphHeading
          }
        >
          Skills:{" "}
        </span>
        <span
          className={
            classes.contentParagraph
          }
        >
          {skills}
        </span>
      </p>
      <p>
        <span
          className={
            classes.contentParagraphHeading
          }
        >
          Category:{" "}
        </span>
        <span
          className={
            classes.contentParagraph
          }
        >
          {category}
        </span>
      </p>
    </div>
  );
}
