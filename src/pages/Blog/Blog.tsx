import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../slices/AppSlices";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { useEffect } from "react";

export default function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentTab(navBarLinks[NavBarLinkIndex.Blog]));
  }, [dispatch]);
  return <div>Blogs coming soon</div>;
}
