import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BasePage from "./components/BasePage/BasePage";
import { RoutePaths } from "./Typings/enums";
import Resume from "./pages/Resume/resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Project from "./pages/Project/Project";
import { useDispatch } from "react-redux";
import { getMediumData } from "./slices/AppSlices";
import BlogContent from "./pages/Blog/BlogContent";

export default function App() {
  const dispatch = useDispatch();
  // dispatch(getMediumData());
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path={RoutePaths.Home}
            element={
              <BasePage
                content={<Home />}
              />
            }
          />
          <Route
            path={RoutePaths.Portfolio}
            element={
              <BasePage
                content={<Portfolio />}
              />
            }
          />
          <Route
            path={RoutePaths.Contact}
            element={
              <BasePage
                content={<Contact />}
              />
            }
          />
          <Route
            path={RoutePaths.Blog}
            element={
              <BasePage
                content={<Blog />}
              />
            }
          />
          <Route
            path={RoutePaths.Resume}
            element={
              <BasePage
                content={<Resume />}
              />
            }
          />
          <Route
            path={`${RoutePaths.Project}/:key`}
            element={
              <BasePage
                content={<Project />}
              />
            }
          />
          <Route
            path={`${RoutePaths.Blog}/:key`}
            element={
              <BasePage
                content={
                  <BlogContent />
                }
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
