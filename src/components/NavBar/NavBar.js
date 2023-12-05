import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Settings } from "@mui/icons-material";
import SkuSearch from "./SkuSearch";

function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar sx={{ height: "8ch" }}>
        <Typography
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block", cursor: "default" },
          }}
          variant="h6"
          onClick={() => navigate("/")}
        >
          Nike Image Search
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <SkuSearch />

          <Button
            sx={{ marginLeft: "10px" }}
            color="inherit"
            onClick={() => navigate("/settings")}
          >
            <Settings />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
