import {
  Divider,
  Text,
  Timeline,
} from "@mantine/core";
import { ResumeSectionProps } from "../../Typings/interfaces";
import classes from "./Resume.module.less";

export default function ResumeSection(
  props: ResumeSectionProps,
) {
  const contentComponent =
    props.contents.map((content) => {
      return (
        <Timeline.Item
          classNames={{
            itemTitle:
              classes.itemTitle,
          }}
          title={content.name}
        >
          <Text
            classNames={{
              root: classes.contentParagraph,
            }}
          >
            {content.company}
          </Text>
          <Text
            classNames={{
              root: classes.contentParagraph,
            }}
          >
            {content.timeline}
          </Text>
          <Text
            classNames={{
              root: classes.contentParagraph,
            }}
          >
            {content.description}
          </Text>
        </Timeline.Item>
      );
    });

  return (
    <>
      <div>
        <h3
          className={
            classes.contentSubHeading
          }
        >
          Resume
        </h3>
        <h1
          className={
            classes.contentHeading
          }
        >
          {props.heading}
        </h1>
      </div>
      <Timeline
        classNames={{
          itemBullet:
            classes.itemBullet,
          root: classes.root,
        }}
        active={props.contents.length}
        // color={"rgba(166, 56, 56, 1)"}
        bulletSize={24}
      >
        {contentComponent}
      </Timeline>
      <Divider
        classNames={{
          root: classes.divider,
        }}
      />
    </>
  );
}
