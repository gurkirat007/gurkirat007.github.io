import { useDispatch } from "react-redux";
import { Header } from "../../components/Header/Header";
import { setCurrentTab } from "../../slices/AppSlices";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { useEffect } from "react";

export default function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentTab(navBarLinks[NavBarLinkIndex.Blog]));
  }, [dispatch]);
  return (
    <div>
      <Header />
      Blog
    </div>
  );
}
