import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import Footer from "./Components/Layouts/Footer/Footer";
import GlobalContextProvider from "./Context/GlobalContext";
import DentistsContainer from "./Components/Pages/Dentists/DentistsContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContextProvider>
          <Routes>
            <Route element={<Navbar />}>
              <Route element={<Footer />}>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/dashboard" element={<DentistsContainer />} />
                <Route path="/dentist/:id" element={<h1>Profesional</h1>} />
                <Route path="/favs" element={<h1>Favoritos</h1>} />
                <Route path="/contact" element={<h1>Contacto</h1>} />
              </Route>
            </Route>
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
