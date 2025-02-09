import { Box, Button, Group } from "@mantine/core";
import classes from "./BottomBox.module.less";
import CVPDF from "../../pages/Resume/Gurkirat_latest_resume-3.pdf";
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
        <a
          className={classes.downloadCV}
          href={CVPDF}
          download="Gurkirat-resume"
        >
          <Button className={classes.downloadCVButton}>DOWNLOAD CV</Button>
        </a>
      </Group>
    </>
  );
}
