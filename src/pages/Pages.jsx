import Cuisine from "./Cuisine";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Search from "./Search";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

const Pages = () => {

    const location = useLocation()

    return (
        <AnimatePresence wait>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/searched/:search" element={<Search />} />
                <Route path="/recipe/:name" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages
