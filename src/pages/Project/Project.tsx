import { useParams } from "react-router-dom";
import projects from "../../content/projects";
import classes from "./Project.module.less";
import { Container } from "@mantine/core";
import RichText from "../../components/RichText/RichText";
import ReactMarkDown from 'react-markdown'

export default function Project() {
  const { key } = useParams();
  const md = projects[Number(key)].default ?? undefined;
  console.log(projects[Number(key)]);

  if(md === undefined) return <></>;

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
      </div>
      
      <Container classNames={{root: classes.content }}><ReactMarkDown children={md}/>
      </Container>
      {/* <p>
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
      </p> */}
    </div>
  );
}
