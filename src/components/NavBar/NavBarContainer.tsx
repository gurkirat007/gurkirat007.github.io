import {
  Box,
  Center,
  Divider,
  Image,
  // ScrollArea,
} from "@mantine/core";
import classes from "./NavBar.module.less";
// import NavBarButton from "./NavBarButton";
import { myInfo } from "../../Typings/AppConstants";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";
import { Header } from "../Header/Header";
// import { InstagramEmbed } from "react-social-media-embed";

export default function NavBarContainer() {
  const isMobile = useMediaQuery(
    `(max-width: ${theme.breakpoints?.lg})`,
  );
  return (
    <div
      className={
        classes.navBarContainer
      }
    >
      {isMobile ? (
        <Header />
      ) : (
        <Center>
          (
          <Box
            className={
              classes.navBarBox
            }
          >
            <h3
              className={
                classes.contentSubHeading
              }
            >
              Web Developer
            </h3>
            <h1
              className={
                classes.contentHeading
              }
            >
              Gurkirat Singh
            </h1>
            <Center>
              <Image
                src="/myImage/cropped_image.png"
                w={150}
                h={150}
              />
            </Center>
            <p
              className={
                classes.contentParagraph
              }
            >
              Hi, I’m Gurkirat Singh, a
              software engineer at
              Mastercard with a passion
              for technology, finance,
              and robotics. I love
              building high-performance
              applications and solving
              complex problems. Welcome
              to my space—explore my
              work, projects, and blogs!
            </p>
            <br />
            <Divider
              classNames={{
                root: classes.divider,
              }}
            />
            <h3
              className={
                classes.contentSubHeading
              }
            >
              @
              {
                myInfo.find(
                  (myInfoCell) =>
                    myInfoCell.key ===
                    "Instagram",
                )?.value
              }
            </h3>
            <h1
              className={
                classes.contentHeading
              }
            >
              INSTAGRAM
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent:
                  "center",
              }}
            >
              <iframe
                src="https://widget.tagembed.com/2152412"
                style={{
                  width: "70%",
                  height: "600px",
                  border: "none",
                }}
              ></iframe>
            </div>
          </Box>
          )
        </Center>
      )}
    </div>
  );
}
