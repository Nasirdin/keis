import Header from "./components/Header";
import Home from "./components/HomePage";
import { Route, Routes } from "react-router";
import NewsPage from "./components/NewsPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AllNewsPage from "./components/AllNewsPage";
import StructurePage from "./components/StructurePage";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<AllNewsPage />} />
        <Route path="/structure" element={<StructurePage />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
