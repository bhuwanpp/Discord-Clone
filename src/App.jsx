import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./firstPage/Home";
import NotFound from "./firstPage/NotFound";
// layouts
import RootLayout from "./layouts/RootLayout";
import Download from "./pages/Download";
import Nitro from "./pages/Nitro";
import Discover from "./pages/Discover";
import Safety from "./pages/Safety";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import PageLayout from "./layouts/PageLayout";
import Career from "./pages/Career";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="download" element={<Download />} />

        <Route path="discover" element={<Discover />} />
      </Route>
      <Route path="/" element={<PageLayout />}>
        <Route path="nitro" element={<Nitro />} />
        <Route path="safety" element={<Safety />} />
        <Route path="career" element={<Career />} />
      </Route>
      <Route path="support" element={<Support />} />
      <Route path="blog" element={<Blog />} />

      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
