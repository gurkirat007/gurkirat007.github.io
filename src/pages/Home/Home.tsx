import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../slices/AppSlices";
import { navBarLinks } from "../../Typings/AppConstants";
import { NavBarLinkIndex } from "../../Typings/enums";
import { useEffect } from "react";
import IntroductionSection from "./IntroductionSection";
import WhatIDoSection from "./WhatIDo";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setCurrentTab(
        navBarLinks[
          NavBarLinkIndex.Home
        ],
      ),
    );
  }, [dispatch]);
  return (
    <div>
      <IntroductionSection />
      <WhatIDoSection />
    </div>
  );
}
