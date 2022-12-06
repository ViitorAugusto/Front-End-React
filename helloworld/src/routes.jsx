import { Footer } from "components/Footer";
import { PaginaPadrao } from "components/PaginaPadrao";
import { NotFound404 } from "pages/NotFound404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { SobreMim } from "./pages/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path='posts/:id' element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound404/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
