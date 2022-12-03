import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { SobreMim } from './pages/SobreMim';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
