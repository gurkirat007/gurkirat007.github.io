import { useDispatch } from "react-redux";
import {
  education,
  navBarLinks,
  publications,
  resumeExperience,
  volunteering,
} from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { setCurrentTab } from "../../slices/AppSlices";
import { useEffect } from "react";
import ResumeSection from "./ResumeSection";

export default function Resume() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setCurrentTab(
        navBarLinks[
          NavBarLinkIndex.Resume
        ],
      ),
    );
  }, [dispatch]);

  return (
    <div>
      <ResumeSection
        contents={resumeExperience}
        heading="Experience"
      />
      <ResumeSection
        contents={education}
        heading="Education"
      />
      <ResumeSection
        contents={publications}
        heading="Publications"
      />
      <ResumeSection
        contents={volunteering}
        heading="Volunteering"
      />
    </div>
  );
}
