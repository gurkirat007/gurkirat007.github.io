import {
  Box,
  Center,
  Divider,
  Image,
  ScrollArea,
} from "@mantine/core";
import classes from "./NavBar.module.less";
import NavBarButton from "./NavBarButton";
import { myInfo } from "../../Typings/AppConstants";
import { InstagramEmbed } from "react-social-media-embed";

export default function NavBarContainer() {
  return (
    <div
      className={
        classes.navBarContainer
      }
    >
      <Center>
        <Box
          className={classes.navBarBox}
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
            Hi, My name is Rory McCan. I
            am a Web Designer, and etiam
            accumsan scelerisque
            rhoncus. Nulla quis laoreet
            velit. Pelteqle quisu
            velleopha retra congue.
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
              justifyContent: "center",
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
      </Center>
    </div>
  );
}
