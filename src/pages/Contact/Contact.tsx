import { useDispatch } from "react-redux";
import { Header } from "../../components/Header/Header";
import { setCurrentTab } from "../../slices/AppSlices";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { useEffect } from "react";

export default function Contact() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentTab(navBarLinks[NavBarLinkIndex.Contact]));
  }, [dispatch]);
  return (
    <div>
      <Header />
      Contact
    </div>
  );
}
