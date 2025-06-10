import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Portfolio/Home/Home"
import { Pokedex } from "../pages/PokeAPI/Pokedex/Pokedex"
import { ContextProvider } from "../context/ContextProvider"
import { PokeDetalles } from "../pages/PokeAPI/PokeDetalles/PokeDetalles"


export const RoutesApp = () => {

    return(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    {/* Portfolio */}
                    <Route path="/" element={<Home />} />

                    {/* PokeAPI */}
                        <Route path="/pokedex" element={<Pokedex /> } />
                        <Route path="/pokemon/:id" element={<PokeDetalles />} />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    )
}