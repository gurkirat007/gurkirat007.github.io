import {
  ActionIcon,
  Group,
} from "@mantine/core";
import { myInfo } from "../../Typings/AppConstants";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import classes from "./SocialsIconGroup.module.less";

export default function SocialIconsGroup() {
  return (
    <Group
      className={classes.socials}
      visibleFrom="md"
    >
      <ActionIcon
        component="a"
        color="orange"
        radius="50%"
        href={`https://www.instagram.com/${
          myInfo.find(
            (myInfoCell) =>
              myInfoCell.key ===
              "Instagram",
          )?.value
        }/`}
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
  );
}
