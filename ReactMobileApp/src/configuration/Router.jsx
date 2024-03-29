import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const RouterItem = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<LandingPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem