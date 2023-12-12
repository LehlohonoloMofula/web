
import { BrowserRouter, Routes, Route}  from 'react-router-dom'

import About from "./pages/About.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Corporate from "./pages/Corporate.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Media from "./pages/Media.jsx";
import NotFound from "./pages/NotFound.jsx";
import Privacy from "./pages/privacy.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return(
  // eslint-disable-next-line no-unreachable
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About />}/>
        <Route path="/contact" element={ < Contact/> }/>
        <Route path="/corporate" element={ <Corporate />}/>
        <Route path="/login" element={ < Login/> }/>
        <Route path="/media" element={ <Media/> } />
        <Route path="/privacy" element={ <Privacy/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App