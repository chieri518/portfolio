import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import { About, Feedbacks, Highlights, LinkedIn, Footer } from "./components";
import {
  Projects,
  Experience,
  UIF,
  Chetz,
  NECX,
  Navbar,
  NotFound,
  JobHunt,
} from "./pages";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const Landing = () => (
  <>
    <About />
    <Highlights />
    <LinkedIn />
    <Feedbacks />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/uif" element={<UIF />} />
          <Route path="/chetz" element={<Chetz />} />
          <Route path="/necx" element={<NECX />} />
          <Route path="/jobhunt" element={<JobHunt />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
