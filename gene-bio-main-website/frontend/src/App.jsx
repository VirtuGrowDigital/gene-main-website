import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";

import About from "./pages/About";
import Manufacturing from "./pages/Manufacturing";
import Certifications from "./pages/Certifications";
import Gallery from "./pages/Gallery";
import GlobalPresence from "./pages/GlobalPresence";

import BecomeDistributor from "./pages/BecomeDistributor";
import BulkPricing from "./pages/BulkPricing";

import Blogs from "./pages/Blogs";
import Events from "./pages/Events";

import BlogDetails from "./pages/BlogDetails";

import Careers from "./pages/Careers";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Products */}
      <Route path="/products" element={<Products />} />

      {/* Company */}
      <Route path="/company/about" element={<About />} />

      <Route
        path="/company/manufacturing"
        element={<Manufacturing />}
      />

      <Route
        path="/company/certifications"
        element={<Certifications />}
      />

      <Route
        path="/company/gallery"
        element={<Gallery />}
      />

      <Route
        path="/company/global-presence"
        element={<GlobalPresence />}
      />

      {/* Partners */}
      <Route
        path="/partners/distributor"
        element={<BecomeDistributor />}
      />

      <Route
        path="/partners/bulk-pricing"
        element={<BulkPricing />}
      />

      {/* Blogs */}
      <Route
        path="/resources/blogs"
        element={<Blogs />}
      />

      {/* Blog Details - Dynamic Route */}
      <Route
        path="/resources/blogs/:slug"
        element={<BlogDetails />}
      />

      {/* Events */}
      <Route
        path="/resources/events"
        element={<Events />}
      />

      {/* Careers */}
      <Route
        path="/careers"
        element={<Careers />}
      />
    </Routes>
  );
}

export default App;