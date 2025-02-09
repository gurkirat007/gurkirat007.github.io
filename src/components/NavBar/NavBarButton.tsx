import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { selectShowNavBar, setShowNavBar } from "../../slices/AppSlices";
import { useAppSelector } from "../../Hooks";

export default function NavBarButton() {
  const dispatch = useDispatch();
  const showNavBar = useAppSelector(selectShowNavBar);

  return (
    <>
      <Button onClick={() => dispatch(setShowNavBar(!showNavBar))}>
        Click Me
      </Button>
    </>
  );
}
