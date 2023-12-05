import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function SearchDetails() {
  const { store } = useContext(AppContext);
  return (
    <Box>
      {store?.get.angles.length > 1 && (
        <>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", cursor: "default" },
            }}
          >
            Showing {store.get.angles.length} images
          </Typography>
          <Typography variant="h6">
            Angles: {store.get.angles.toString()}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default SearchDetails;
