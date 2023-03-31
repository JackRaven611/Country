import { AppStyled } from "./AppStyled.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { List } from "./Components/Main/List/List";
import { Header } from "./Components/Common/Header/Header";
import { PageNotFound } from "./Components/Common/PageNotFound/PageNotFound";
import { CountryInfo } from "./Components/Details/CountryInfo/CountryInfo";

export const ModeContext = createContext(false);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      <BrowserRouter>
        <AppStyled themeMode={darkMode}>
          <Header />
          <Routes>
            <Route path="/" element={<List />} />
            <Route path={"/:countryId"} element={<CountryInfo />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AppStyled>
      </BrowserRouter>
    </ModeContext.Provider>
  );
}

export default App;
