import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Error } from "../pages/Error/Error"
import { Footer } from "../components/Footer/Footer"


export const RoutesApp = () => {

    return(
        <div>
            <BrowserRouter>
                <header>
                    
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Error/> } />
                    </Routes>
                </main>

                <footer>
                    <Footer />
                </footer>
            </BrowserRouter>
        </div>
    )
}