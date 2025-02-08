import { Divider, Grid } from "@mantine/core";
import classes from "./Home.module.less";
import { myInfo } from "../../Typings/AppConstants";

function MyInfo() {
  return (
    <Grid>
      {myInfo.map((myInfoElement) => {
        return (
          <Grid.Col span={6}>
            <span className={classes.contentParagraphHeading}>
              {myInfoElement.key}:
            </span>{" "}
            <span className={classes.contentParagraph}>
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
        <h3 className={classes.contentSubHeading}>Full Stack Developer</h3>
        <h1 className={classes.contentHeading}>Gurkirat Singh</h1>
      </div>
      <div>
        <p className={classes.contentParagraph}>
          Hi, My name is Rory McCan. I am a Web Designer, and etiam accumsan
          scelerisque rhoncus. Nulla quis laorey velit drana. Pelteqle quisu
          velleopha retra congue. Nulla quis laoreet velit. Pelteqle quisu
          velleopha retra congue. Lorem ipsum nolan sithe cons eturadip liscing
          elit. Donec hendrerit sapien coner the consequat erose viverra at.
          Quality quis laorey velit. Pelteqle quisu velleopha retra the congue.
        </p>
        <MyInfo />
      </div>
      <Divider />
    </div>
  );
}
