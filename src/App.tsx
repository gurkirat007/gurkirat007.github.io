import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BasePage from "./components/BasePage/BasePage";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePage content={<Home />} />} />
          <Route path="/about" element={<BasePage content={<About />} />} />
          <Route path="/contact" element={<BasePage content={<Contact />} />} />
          <Route path="/blog" element={<BasePage content={<Blog />} />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
