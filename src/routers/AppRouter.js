import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar';
import { Envio } from './../components/Envio';
import { Rechazos } from './../components/Rechazos';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/descuentos' element={<Envio />} />
                <Route path='/rechazos' element={<Rechazos />} />
            </Routes>
        </BrowserRouter>
    )
}
