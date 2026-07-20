import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  Home,
  Projects,
  Experience,
  UIF,
  Chetz,
  NECX,
  BMO,
  MyStory,
  NotFound,
  JobHunt,
  CAD,
} from "./pages";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/uif" element={<UIF />} />
          <Route path="/chetz" element={<Chetz />} />
          <Route path="/necx" element={<NECX />} />
          <Route path="/bmo" element={<BMO />} />
          <Route path="/story" element={<MyStory />} />
          <Route path="/jobhunt" element={<JobHunt />} />
          <Route path="/cad" element={<CAD />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
