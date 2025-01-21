import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../slices/AppSlices";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentTab(navBarLinks[NavBarLinkIndex.Home]));
  }, [dispatch]);
  return (
    <div>
      Home
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
      <h1>Home</h1>
      <br />
    </div>
  );
}
