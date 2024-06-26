/** @format */

import "./App.css";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import Navbar from "./components/home-component/Navbar/Navbar";
import Footer from "./components/home-component/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Blogs from "./pages/Blogs/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./components/about-component/about-us/AboutUs";
// import Leadership from "./components/about-component/leadership/Leadership";
// import History from "./components/about-component/history/History";
// import Community from "./components/about-component/join-community/Community";
// import Founder from "./components/about-component/founder/Founder";
// import Matter from "./components/about-component/matter/Matter";
// import Initiatives from "./components/about-component/initiatives/Initiatives";
import SingleBlog from "./components/blogs-components/blogs-data/single-blog/SingleBlog";
// import MembershipPage from "./pages/Membership/MembershipPage";
import Pricing from "./components/membership-components/pricing-component/Pricing";
import CodingCompetitions from "./components/about-component/initiatives/initiatives-components/coding-compentition/CodingCompetitions";
import ResearchForum from "./components/about-component/initiatives/AIResearchForum/ResearchForum";
import Member from "./components/get-involved-component/member/Member";
import Volunteer from "./components/get-involved-component/volunteer/Volunteer";
import VolunteerPage from "./components/get-involved-component/volunteer/VolunteerPage";
import Intern from "./components/get-involved-component/intern/Intern";
import Youth from "./components/program-components/youth/Youth";
import World from "./components/blogs-components/blogs-data/wrc-day/World";
import Faq from "./components/faqs/Faq";

function App() {
  emailjs.init("service_36z5err");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="member" element={<Member />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="volunteerpage" element={<VolunteerPage />} />
          <Route path="world" element={<World />} />
          <Route path="intern" element={<Intern />} />
          <Route path="youth" element={<Youth />} />
          <Route path="about" element={<About />}>
            <Route path="" element={<AboutUs />} />
            {
  /*
  <Route path="matter" element={<Matter />} />
  <Route path="join-community" element={<Community />} />
  <Route path="leadership" element={<Leadership />} />
  <Route path="our-history" element={<History />} />
  <Route path="founder" element={<Founder />} />
  <Route path="join-initiatives" element={<Initiatives />} />
  */
}

          </Route>
          <Route path="coding-competition" element={<CodingCompetitions />} />
          <Route path="ai-research-forum" element={<ResearchForum />} />
          <Route path="events" element={<Events />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
          {/* <Route path="membership" element={<MembershipPage />} /> */}
          <Route path="membership/access-our-plans" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
