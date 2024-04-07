import Header from "./components/Header";
import Home from "./components/HomePage";
import { Route, Routes } from "react-router";
import NewsPage from "./components/NewsPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AllNewsPage from "./components/AllNewsPage";
import StructurePage from "./components/StructurePage";
import StructureSubpage from "./components/StructureSubpage";
import Study from "./components/Study";
import Applicant from "./components/Applicant";
import Docs from "./components/Docs";
import EducationalProcess from "./components/EducationalProcess";
import About from "./components/About";
import Admin from "./components/Admin";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<AllNewsPage />} />
        <Route path="/structure" element={<StructurePage />} />
        <Route path="/structure/:id" element={<StructureSubpage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/directions" element={<Study />} />
        <Route path="/applicant" element={<Applicant />} />
        <Route path="/educational-process" element={<EducationalProcess />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
