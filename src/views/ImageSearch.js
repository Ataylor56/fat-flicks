import { Container } from "@mui/material";
import ImageResultGrid from "../components/ImageResultGrid";
import SearchDetails from "../components/SearchDetails";

function ImageSearch() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          marginTop: "50px",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <SearchDetails />
        <ImageResultGrid />
      </Container>
    </>
  );
}

export default ImageSearch;
