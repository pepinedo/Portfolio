import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "../components/Portfolio/Footer/Footer"
import { Home } from "../pages/Portfolio/Home/Home"


export const RoutesApp = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}