import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from './constants'
import ServicoPage from './pages/Servico/Servico'
import DepoimentoPage from './pages/Depoimento/Depoimento'
import ContatoPage from './pages/Contato/Contato'
import HomePage from 'src/pages/Home/Home'

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage/>}/>
                <Route path={ROUTES.SERVICO} element={<ServicoPage/>}/>
                <Route path={ROUTES.DEPOIMENTO} element={<DepoimentoPage/>}/>
                <Route path={ROUTES.CONTATO} element={<ContatoPage/>}/>

                <Route path='*' element={<Navigate to='/'/> }/>
            </Routes>
        </BrowserRouter>
    )

}