import { useDispatch } from "react-redux";
import { navBarLinks } from "../../Typings/AppConstants";
import {
  NavBarLinkIndex,
  RoutePaths,
} from "../../Typings/enums";
import { setCurrentTab } from "../../slices/AppSlices";
import { useEffect } from "react";
import classes from "./Portfolio.module.less";
import {
  BackgroundImage,
  Box,
  Grid,
  Image,
  Overlay,
} from "@mantine/core";
import { projects } from "../../content/projects";
import { useNavigate } from "react-router-dom";
import { useHover } from "@mantine/hooks";

function ProjectCard() {
  const navigate = useNavigate();
  const projectCards = Object.keys(
    projects,
  ).map((project) => {
    const { hovered, ref } = useHover();
    return (
      <Grid.Col span={6}>
        {/* {projects[project].image} */}
        <BackgroundImage
          src={projects[project].image}
          onClick={() => {
            navigate(
              `${RoutePaths.Project}/${project}`,
            );
          }}
          classNames={{
            root: classes.projectImage,
          }}
        >
          <Box
            miw={300}
            mih={300}
            mx="auto"
            ref={ref}
            className={
              classes.projectImageBox
            }
          >
            {hovered && (
              <p
                className={
                  classes.contentParagraphHeading
                }
              >
                {projects[project].name}
              </p>
            )}
            {hovered && (
              <p
                className={
                  classes.contentParagraphHeading
                }
              >
                {
                  projects[project]
                    .category
                }
              </p>
            )}
          </Box>
        </BackgroundImage>
      </Grid.Col>
    );
  });
  return projectCards;
}

export default function Portfolio() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setCurrentTab(
        navBarLinks[
          NavBarLinkIndex.Portfolio
        ],
      ),
    );
  }, [dispatch]);

  return (
    <div>
      <div>
        <h3
          className={
            classes.contentSubHeading
          }
        >
          TAKE A LOOK AT
        </h3>
        <h1
          className={
            classes.contentHeading
          }
        >
          PROJECTS
        </h1>
      </div>
      <Grid>
        <ProjectCard />
      </Grid>
      {/* <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6930177143700103168?compact=1"
        height="399"
        width="710"
        frameborder="0"
        allowfullscreen=""
        title="Embedded post"
      ></iframe> */}
    </div>
  );
}
