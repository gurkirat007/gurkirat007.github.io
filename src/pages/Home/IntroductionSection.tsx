import {
  Divider,
  Grid,
} from "@mantine/core";
import classes from "./Home.module.less";
import { myInfo } from "../../Typings/AppConstants";
import { myDescription } from "../../content/home";
import RichText from "../../components/RichText/RichText";

function MyInfo() {
  return (
    <Grid>
      {myInfo.map((myInfoElement) => {
        return (
          <Grid.Col span={6}>
            <span
              className={
                classes.contentParagraphHeading
              }
            >
              {myInfoElement.key}:
            </span>{" "}
            <span
              className={
                classes.contentParagraph
              }
            >
              {myInfoElement.value}
            </span>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}

export default function IntroductionSection() {
  return (
    <div>
      <div>
        <h3
          className={
            classes.contentSubHeading
          }
        >
          Full Stack Developer
        </h3>
        <h1
          className={
            classes.contentHeading
          }
        >
          Gurkirat Singh
        </h1>
      </div>
      <div>
        <RichText
          className={
            classes.contentParagraph
          }
          htmlContent={myDescription}
        />
        <br />
        <MyInfo />
      </div>
      <Divider
        classNames={{
          root: classes.divider,
        }}
      />
    </div>
  );
}
