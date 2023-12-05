import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext({
  store: {
    get: {
      images: [],
      angles: [],
      searchTerm: "",
      searched: false,
      theme: "dark",
    },
    set: {
      images: () => {},
      angles: () => {},
      searchTerm: () => {},
      searched: () => {},
      theme: () => {},
    },
    actions: {
      reset: () => {},
      toggleColorMode: () => {},
    },
  },
});

function AppContextProvider({ children }) {
  const [images, setImages] = useState([]);
  const [angles, setAngles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [theme, setTheme] = useState("dark");

  const store = {
    get: {
      images,
      angles,
      searchTerm,
      searched,
      theme,
    },
    set: {
      images: (newSelected) => setImages(newSelected),
      angles: (newSelected) => setAngles(newSelected),
      searchTerm: (newSelected) => setSearchTerm(newSelected),
      searched: (newSelected) => setSearched(newSelected),
      theme: (newSelected) => setTheme(newSelected),
    },
    actions: {
      reset: () => {
        setImages([]);
        setAngles([]);
        setSearchTerm("");
        setSearched(false);
      },
      toggleColorMode: () => {
        setTheme(theme === "light" ? "dark" : "light");
      },
    },
  };

  return (
    <AppContext.Provider value={{ store }}>{children}</AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
