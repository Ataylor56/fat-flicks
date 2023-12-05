import { useState, useContext } from "react";
import {
  ImageList,
  ImageListItem,
  Modal,
  Button,
  Box,
  Card,
  CardActions,
  CircularProgress,
} from "@mui/material";
import { AppContext } from "../contexts/AppContext";

function ImageResultGrid() {
  const { store } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = (image) => {
    // this will be a call to a larger res image in db
    setSelectedImage(image);
    window.open(image.url, "_blank");
    //setOpen(true);
  };

  const handleSave = (image) => {
    console.log(window.navigator.msSaveOrOpenBlob);
    const a = document.createElement("a");
    a.href = image?.url;
    a.setAttribute("download", "image.jpg");
    document.body.appendChild(a);
    // a.click();
    alert("Broken atm..");
    document.body.removeChild(a);
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <iframe
            src={selectedImage?.url}
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </Box>
      </Modal>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {store.get.searched && (
          <>
            <CircularProgress />
          </>
        )}
        {store.get.images?.length === 0 && !store.get.searched && (
          <h1>Search to view images</h1>
        )}
      </div>
      <ImageList
        sx={{ width: "100%", height: "100%", justifyItems: "center" }}
        cols={2}
      >
        {store.get.images?.map((image) => (
          <Card>
            <ImageListItem key={image.url}>
              <img src={image.url} alt={image} />
            </ImageListItem>
            <CardActions>
              <Button size="small" onClick={() => handleOpen(image)}>
                Open
              </Button>
              <Button size="small" onClick={() => handleSave(image)}>
                Save
              </Button>
            </CardActions>
          </Card>
        ))}
      </ImageList>
    </>
  );
}

export default ImageResultGrid;
