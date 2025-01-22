import { useDispatch } from "react-redux";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { setCurrentTab } from "../../slices/AppSlices";
import { useEffect } from "react";

export default function Resume() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentTab(navBarLinks[NavBarLinkIndex.Resume]));
  }, [dispatch]);

  return <div>Resume</div>;
}
