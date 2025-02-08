import { useDispatch } from "react-redux";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { setCurrentTab } from "../../slices/AppSlices";
import { useEffect } from "react";

export default function Projects() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentTab(navBarLinks[NavBarLinkIndex.Projects]));
  }, [dispatch]);

  return <div>Projects</div>;
}
