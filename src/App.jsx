
import { BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import portfolioDetail from "./components/portfolio-detail.jsx";
import Privacy from "./pages/privacy.jsx";
import corporate from "./pages/Corporate.jsx";
import contact from "./pages/Contact.jsx";
import login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Media from "./pages/Media.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return(
  // eslint-disable-next-line no-unreachable
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About />}/>
        <Route path="/media" element={ < Media/> }/>
        <Route path="/privacy" element={ <Privacy/> }/>
        <Route path="*" element={ <NotFound/> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App