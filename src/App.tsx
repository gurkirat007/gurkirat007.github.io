import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BasePage from "./components/BasePage/BasePage";
import { RoutePaths } from "./Typings/enums";
import Resume from "./pages/Resume/resume";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path={RoutePaths.Home}
            element={<BasePage content={<Home />} />}
          />
          <Route
            path={RoutePaths.About}
            element={<BasePage content={<About />} />}
          />
          <Route
            path={RoutePaths.Contact}
            element={<BasePage content={<Contact />} />}
          />
          <Route
            path={RoutePaths.Blog}
            element={<BasePage content={<Blog />} />}
          />
          <Route
            path={RoutePaths.Resume}
            element={<BasePage content={<Resume />} />}
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
