import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Section-0-Navbar/Navbar.jsx";
import Hero from "./Section-1-Hero/Hero.jsx";
import Email from "./Section-2-email/Email.jsx";
import Aboutus from "./Section-3-aboutus/Aboutus.jsx";
import Team from "./Section-4-team/Team.jsx";
import Gallery from "./Section-5-gallery/Gallery.jsx";
import Howitwork from "./Section-6-how-it-works/Howitwork.jsx";
import Services from "./section-7-services/Services.jsx";
import Customerreview from "./Section-8-customer-review/Customerreview.jsx";
import Pricing from "./section-9-pricing/Pricing.jsx";
import Frequentquestions from "./Section-10-frequently-asked-questions/Frequentquestions.jsx";
import Blog from "./Section-11-our-blog/Blog.jsx";
import Contactus from "./Section-12-contact-us/Contactus.jsx";
import Footer from "./Section-13-Footer/Footer.jsx";

//----
// import Formhandling from "./Formhandling.jsx";
import Myref from "./Myref.jsx";
// import Myuseeffect from "./Myuseeffect.jsx";
// import ActivityDemo from "./Activitydemo.jsx";
import RecentTransactions from "./Useeffect.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>homepage</h1>} />
        <Route path="/about" element={<h1>About page</h1>} />
        <Route path="/blog" element={<h1>Blog page</h1>} />
      </Routes>

      <Navbar />
      {/* <Formhandling /> */}
      <Myref />
      {/* <Myuseeffect />
      <ActivityDemo /> */}
      {/* ------------------ */}
      <Hero />
      <RecentTransactions />
      <Email />
      <Aboutus />
      <Team />
      <Gallery />
      <Howitwork />
      <Services />
      <Customerreview />
      <Pricing />
      <Frequentquestions />
      <Blog />
      <Contactus />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
