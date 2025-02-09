import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../slices/AppSlices";
import {
  myInfo,
  navBarLinks,
} from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { useEffect } from "react";
import classes from "./Contact.module.less";
import { Divider } from "@mantine/core";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contact() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setCurrentTab(
        navBarLinks[
          NavBarLinkIndex.Contact
        ],
      ),
    );
  }, [dispatch]);
  return (
    <>
      <div>
        <h1
          className={
            classes.contentHeading
          }
        >
          Contact me
        </h1>
      </div>
      <div>
        <p
          className={
            classes.contentParagraph
          }
        >
          If you have something to tell
          me please go ahead
        </p>
      </div>
      <div>
        <p>
          <span
            className={
              classes.contentParagraphHeading
            }
          >
            Phone:{" "}
          </span>
          <span
            className={
              classes.contentParagraph
            }
          >
            +91 9988801802
          </span>
        </p>
        <p>
          <span
            className={
              classes.contentParagraphHeading
            }
          >
            Email:{" "}
          </span>
          <span
            className={
              classes.contentParagraph
            }
          >
            gurkirat.singh.nitw@gmail.com
          </span>
        </p>
        <p>
          <span
            className={
              classes.contentParagraphHeading
            }
          >
            Linkedin:{" "}
          </span>
          <span
            className={
              classes.contentParagraph
            }
          >
            /gurkiratsingh007
          </span>
        </p>
        <p>
          <span
            className={
              classes.contentParagraphHeading
            }
          >
            Instagram:{" "}
          </span>
          <span
            className={
              classes.contentParagraph
            }
          >
            {
              myInfo.find(
                (myInfoCell) =>
                  myInfoCell.key ===
                  "Instagram",
              )?.value
            }
          </span>
        </p>
      </div>
      <Divider
        classNames={{
          root: classes.divider,
        }}
      />
      <div>
        <h3
          className={classes.getInTouch}
        >
          Get in touch
        </h3>
        <ContactForm />
      </div>
    </>
  );
}
