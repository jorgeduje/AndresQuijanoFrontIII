import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import Footer from "./Components/Layouts/Footer/Footer";
import GlobalContextProvider from "./Context/GlobalContext";
import DentistsContainer from "./Components/Pages/Dentists/DentistsContainer";
import Home from "./Components/Pages/Home/Home";
import DentistContainer from "./Components/Pages/Dentist/DentistContainer";
import FavsContainer from "./Components/Pages/Favs/FavsContainer";
import ContactContainer from "./Components/Pages/Contact/ContactContainer";
import ErrorPageContainer from "./Components/Pages/ErrorPage/ErrorPageContainer";



function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalContextProvider>
          <Routes>
            <Route element={<Navbar />}>
              <Route element={<Footer />}>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DentistsContainer />} />
                <Route path="/dentist/:id" element={<DentistContainer />} />
                <Route path="/favs" element={<FavsContainer />} />
                <Route path="/contact" element={<ContactContainer />} />
              </Route>
            </Route>
            <Route path="*" element={<ErrorPageContainer />} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
