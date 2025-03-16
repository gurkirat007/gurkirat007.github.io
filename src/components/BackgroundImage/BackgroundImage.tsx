import {
  Box,
  BackgroundImage,
  Overlay,
} from "@mantine/core";
import classes from "./BackgroundImage.module.less";

export default function BackgroundImageComponent() {
  return (
    <div>
      <Box
        className={
          classes.myImageContainer
        }
      >
        {/* <img src="final.svg" /> */}
        <BackgroundImage
          className={classes.myImage}
          src="/myImage/myImage.JPG"
          radius="sm"
        ></BackgroundImage>
        <Overlay
          className={classes.overlay}
          gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
          opacity={0.85}
        >
          <img
            className={classes.logo}
            src="final.svg"
          />
        </Overlay>
      </Box>
    </div>
  );
}
