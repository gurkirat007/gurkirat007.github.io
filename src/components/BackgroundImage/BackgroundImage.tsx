import {
  Box,
  BackgroundImage,
  Overlay,
  ActionIcon,
  Group,
} from "@mantine/core";
import classes from "./BackgroundImage.module.less";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
export default function BackgroundImageComponent() {
  return (
    <div>
      <Box className={classes.myImageContainer}>
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
          <img className={classes.logo} src="final.svg" />
          <Group className={classes.socials}>
            <ActionIcon color="orange" radius="50%">
              <FaInstagram color="black" />
            </ActionIcon>
            <ActionIcon color="orange" radius="50%">
              <FaLinkedin color="black" />
            </ActionIcon>
            <ActionIcon color="orange" radius="50%">
              <FaGithub color="black" />
            </ActionIcon>
            <ActionIcon color="orange" radius="50%">
              <FaDiscord color="black" />
            </ActionIcon>

            {/* <DiscordIcon /> */}
          </Group>
        </Overlay>
      </Box>
    </div>
  );
}
