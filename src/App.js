import { useContext, useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppContextProvider, { AppContext } from "./contexts/AppContext";
// import ColorModeContext from "./contexts/ColorModeContext";
import NavBar from "./components/NavBar/NavBar";
import ImageSearch from "./views/ImageSearch";
import Settings from "./views/Settings";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  debugger;
  const { store } = useContext(AppContext);
  const theme = useMemo(
    () => createTheme({ palette: { mode: store.get.theme } }),
    [store.get.theme]
  );
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ImageSearch />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <ToastContainer
            position="bottom-right"
            theme="dark"
            style={{ zIndex: 999 }}
          />
        </BrowserRouter>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
