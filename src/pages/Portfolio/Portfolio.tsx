import { useDispatch } from "react-redux";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { setCurrentTab } from "../../slices/AppSlices";
import { useEffect } from "react";
import classes from "./Portfolio.module.less";
import { Grid } from "@mantine/core";
import { projects } from "../../content/projects";

function ProjectCard() {
  const projectCards = Object.keys(projects).map((project) => {
    return <Grid.Col span={6}>{projects[project].image}</Grid.Col>;
  });
  return projectCards;
}

export default function Portfolio() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentTab(navBarLinks[NavBarLinkIndex.Portfolio]));
  }, [dispatch]);

  return (
    <div>
      <div>
        <h3 className={classes.contentSubHeading}>TAKE A LOOK AT</h3>
        <h1 className={classes.contentHeading}>PROJECTS</h1>
      </div>
      <Grid>
        <ProjectCard />
      </Grid>
    </div>
  );
}
