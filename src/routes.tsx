import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from 'src/pages/Home/Home'
import Contato from './components/Contato'
import { ROUTES } from './constants'
import Servico from './components/Servico'
import Sobre from './components/Sobre'
import Depoimento from './pages/Depoimento/Depoimento'

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home/>}/>
                <Route path={ROUTES.SERVICO} element={<Servico/>}/>
                <Route path={ROUTES.SOBRE} element={<Sobre/>}/>
                <Route path={ROUTES.DEPOIMENTO} element={<Depoimento/>}/>
                <Route path={ROUTES.CONTATO} element={<Contato/>}/>

                <Route path='*' element={<Navigate to='/'/> }/>
            </Routes>
        </BrowserRouter>
    )

}