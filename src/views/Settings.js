import { useContext } from "react";
import { Container, Button } from "@mui/material";
import { AppContext } from "../contexts/AppContext";

function Settings() {
  const { store } = useContext(AppContext);
  const updateTheme = () => {
    store.set.theme(store.get.theme === "light" ? "dark" : "light");
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        marginTop: "50px",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Settings</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={store.actions.toggleColorMode}
      >
        Change to {store.get.theme === "light" ? "dark" : "light"} theme
      </Button>
    </Container>
  );
}

export default Settings;
