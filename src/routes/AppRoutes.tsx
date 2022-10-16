import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Home from '../components/Home';
import Configuracao from '../components/Configuracao';
import Financeiro from '../components/Financeiro';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Bloqueio from '../components/Bloqueio';

const AppRoutes = () => {

  const userContext = useContext(AuthContext);

  const { user } = userContext;
  
  return(
    <Router>
      <Routes>
        <Route path='/' element={ (!user.id) ? <Login /> : <Home /> } /> 
        <Route path='/home' element={ (!user.id) ? <Login /> : <Home /> } />
        <Route path='/dashboard' element={ (!user.id) ? <Login /> : <Dashboard /> } />
        <Route path='/financeiro' element={ (user.id) ? (!user.perfil.includes("financeiro") ? <Bloqueio /> : <Financeiro />) : <Login /> }/>
        <Route path='/configuracao' element={ (user.id) ? (!user.perfil.includes("administrador") ? <Bloqueio /> : <Configuracao />) : <Login /> }/>
      </Routes>
    </Router>
  )
}

export default AppRoutes