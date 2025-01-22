import { Box, Button, Center, Group } from "@mantine/core";
import classes from "./BottomBox.module.css";

export default function BottomBox() {
  return (
    <>
      {/* <Box className={classes.bottomBox}> */}
      {/* <Center className={classes.centerBox}> */}
      <Group className={classes.group}>
        {/* <Center className={classes.centerBox}> */}
        {/* <Box className={classes.fullScreenButton}>Full screen button</Box> */}
        <Button className={classes.fullScreenButton}>Full screen button</Button>
        {/* </Center> */}
        <Box className={classes.contactInfoTiles}>
          {/* <Center>email</Center> */}
          <div>
            <p>LOCATION</p>
            <p>Pune, India</p>
          </div>
        </Box>
        <Box className={classes.contactInfoTiles}>
          <div>
            <h6>E-MAIL</h6>
            <p>gurkirat.singh.nitw@gmail.com</p>
          </div>
        </Box>
        <Box className={classes.contactInfoTiles}>
          <div>
            <h6>PHONE</h6>
            <p>+91 9988801802</p>
          </div>
        </Box>
        {/* <Center className={classes.centerBox}> */}
        {/* <Box className={classes.downloadCV}> */}
        <Button className={classes.downloadCV}>DOWNLOAD CV</Button>
        {/* </Box> */}
        {/* </Center> */}
      </Group>
      {/* </Center> */}
      {/* </Box> */}
    </>
  );
}
