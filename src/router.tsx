import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Plan from "./pages/Plan";
import Process from "./pages/Process";
import SingleService from "./pages/SingleService";

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/process" element={<Process />} />
                <Route path="/single-service" element={<SingleService />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default AppRouter;