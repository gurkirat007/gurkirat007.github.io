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
            <ActionIcon
              component="a"
              color="orange"
              radius="50%"
              href="https://www.instagram.com/_gurkirat_singh007/"
            >
              <FaInstagram color="black" />
            </ActionIcon>
            <ActionIcon
              color="orange"
              radius="50%"
              component="a"
              href="https://www.linkedin.com/in/gurkiratsingh007/"
            >
              <FaLinkedin color="black" />
            </ActionIcon>
            <ActionIcon
              color="orange"
              radius="50%"
              component="a"
              href="https://github.com/gurkirat007"
            >
              <FaGithub color="black" />
            </ActionIcon>
            <ActionIcon
              color="orange"
              radius="50%"
              component="a"
              href="https://discordapp.com/users/1318813826493452320"
            >
              <FaDiscord color="black" />
            </ActionIcon>

            {/* <DiscordIcon /> */}
          </Group>
        </Overlay>
      </Box>
    </div>
  );
}
