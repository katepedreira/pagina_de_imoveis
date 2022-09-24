import './App.css';
import SobrePage from './pages/SobrePage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPageTemplate from './pageTemplates/MenuPageTemplate';
import ImoveisPage from './pages/ImoveisPage';
import ImovelSinglepage from './pages/ImovelSinglePage';

function App() {
  return (
    <BrowserRouter>
      <MenuPageTemplate>
        <Routes>
          <Route path='/' exact={true} element={<HomePage />}/>
          <Route path='/sobre' exact={true} element={<SobrePage />}/>
          <Route path='/imoveis' exact={true} element={<ImoveisPage />}/>
          <Route path='/imoveis/:id' exact={true} element={<ImovelSinglepage />}/>
        </Routes>
      </MenuPageTemplate>
  </BrowserRouter>
  );
 
}

export default App;
