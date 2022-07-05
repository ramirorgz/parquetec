import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import HomePage from "./paginas/Home";
import ContactoPage from "./paginas/Contacto";
import NovedadesPage from "./paginas/Novedades";
import NosotrosPage from "./paginas/Nosotros";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
