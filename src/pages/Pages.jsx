import Cuisine from "./Cuisine";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Recipe from "./Recipe";

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Search />} />
            <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
    )
}

export default Pages
