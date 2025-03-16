import {
  Box,
  Button,
  Group,
} from "@mantine/core";
import {
  RiCollapseHorizontalFill,
  RiExpandHorizontalFill,
} from "react-icons/ri";
import classes from "./BottomBox.module.less";
import CVPDF from "../../pages/Resume/Gurkirat_latest_resume-3.pdf";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Hooks";
import {
  selectIsImgFullScreen,
  setImgFullScreen,
} from "../../slices/AppSlices";
export default function BottomBox() {
  const dispatch = useAppDispatch();
  const isImgFullScreen =
    useAppSelector(
      selectIsImgFullScreen,
    );

  return (
    <>
      <Group className={classes.group}>
        <Button
          onClick={() => {
            dispatch(
              setImgFullScreen(
                !isImgFullScreen,
              ),
            );
          }}
          className={
            classes.fullScreenButton
          }
        >
          {isImgFullScreen ? (
            <RiCollapseHorizontalFill
              scale={10}
              size={30}
            />
          ) : (
            <RiExpandHorizontalFill
              scale={10}
              size={30}
            />
          )}
        </Button>
        <Box
          className={
            classes.contactInfoTiles
          }
        >
          <div>
            <p
              className={
                classes.infoTylesHeading
              }
            >
              LOCATION
            </p>
            <p
              className={
                classes.infoTylesData
              }
            >
              Pune, India
            </p>
          </div>
        </Box>
        <Box
          className={
            classes.contactInfoTiles
          }
        >
          <div>
            <p
              className={
                classes.infoTylesHeading
              }
            >
              E-MAIL
            </p>
            <p
              className={
                classes.infoTylesData
              }
            >
              gurkirat.singh.nitw@gmail.com
            </p>
          </div>
        </Box>
        <Box
          className={
            classes.contactInfoTiles
          }
        >
          <div>
            <p
              className={
                classes.infoTylesHeading
              }
            >
              PHONE
            </p>
            <p
              className={
                classes.infoTylesData
              }
            >
              +91 9988801802
            </p>
          </div>
        </Box>
        <a
          className={classes.downloadCV}
          href={CVPDF}
          download="Gurkirat-resume"
        >
          <Button
            className={
              classes.downloadCVButton
            }
          >
            DOWNLOAD CV
          </Button>
        </a>
      </Group>
    </>
  );
}
