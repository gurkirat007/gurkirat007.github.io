import { Box, Button, Group } from "@mantine/core";
import classes from "./BottomBox.module.less";

export default function BottomBox() {
  return (
    <>
      <Group className={classes.group}>
        <Button className={classes.fullScreenButton}>Full screen button</Button>
        <Box className={classes.contactInfoTiles}>
          <div>
            <p className={classes.infoTylesHeading}>LOCATION</p>
            <p className={classes.infoTylesData}>Pune, India</p>
          </div>
        </Box>
        <Box className={classes.contactInfoTiles}>
          <div>
            <p className={classes.infoTylesHeading}>E-MAIL</p>
            <p className={classes.infoTylesData}>
              gurkirat.singh.nitw@gmail.com
            </p>
          </div>
        </Box>
        <Box className={classes.contactInfoTiles}>
          <div>
            <p className={classes.infoTylesHeading}>PHONE</p>
            <p className={classes.infoTylesData}>+91 9988801802</p>
          </div>
        </Box>
        <Button className={classes.downloadCV}>DOWNLOAD CV</Button>
      </Group>
    </>
  );
}
