import {
  Box,
  Center,
  Image,
  ScrollArea,
} from "@mantine/core";
import classes from "./NavBar.module.less";
import NavBarButton from "./NavBarButton";
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
          <Image
            radius="50%"
            src="/myImage/myImage.JPG"
            height={"auto%"}
            width={"5"}
            fit="contain"
          />
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
          <h1>Home</h1>
          <br />
          <h1>Home</h1>
          <br />
          <h1>Home</h1>
          <br />
          <h1>Home</h1>
          <br />
          <h1>Home</h1>
          <br />
          <h1>Home</h1>
          <br />
          <h1>Home</h1>
          <br />
          <h1>Home</h1>
          <br />
          <h1>Home</h1>
          <br />
          <h1>Home</h1>
          <br />
        </Box>
      </Center>
      {/* <Center> */}

      {/* </Center> */}
    </div>
  );
}
