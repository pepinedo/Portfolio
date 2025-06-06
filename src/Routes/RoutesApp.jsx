import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Footer } from "../components/Footer/Footer"


export const RoutesApp = () => {

    return(
        <div>
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>

                <footer>
                    <Footer />
                </footer>
            </BrowserRouter>
        </div>
    )
}