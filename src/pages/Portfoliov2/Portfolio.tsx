import ReactMarkDown from 'react-markdown'
import projects from '../../content/projects'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { setCurrentTab } from '../../slices/AppSlices';
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex, RoutePaths } from '../../Typings/enums';
import classes from "./Portfolio.module.less";
import {
    Button,
    Card,
    Text,
  } from "@mantine/core";

export function getTrailerMD(description: string) {
    return description.split('\n').slice(0, 5).join("\n");
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
console.log(projects);
    
return <>
{projects.map((v, idx) => {
    return <ProjectCard key={idx} markdown={v.default} index={idx}/>;
})}
</>;
}

function ProjectCard(props: {markdown: string, index: number}) {
    const navigate = useNavigate();
        return <Card
              classNames={{
                root: `${classes.blogTile} ${classes.card}`,
              }}
            >

            <Text size="sm"
                c="dimmed">{<div><ReactMarkDown children={getTrailerMD(props.markdown)}/></div>}</Text>

              <Button
                classNames={{
                  root: classes.readMoreButton,
                }}
                onClick={() => {
                  navigate(
                    `${RoutePaths.Project}/${props.index}`,
                  );
                }}
              >
                Read more
              </Button>
            </Card>
}