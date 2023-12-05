import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { Search, Cancel } from "@mui/icons-material";
import { AppContext } from "../../contexts/AppContext";
import { toast } from "react-toastify";
import FetchImagesApi from "../../api/FetchImagesApi";

function SkuSearch() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [isValidSearch, setIsValidSearch] = useState(true);
  const { store } = useContext(AppContext);
  const onReset = () => {
    setSearchText("");
    setIsValidSearch(true);
    store.actions.reset();
  };
  const onSearchChange = (e) => {
    if (!isValidSearch) {
      setIsValidSearch(true);
    }
    setSearchText(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    store.set.angles([]);
    store.set.images([]);
    store.set.searched(true);
    if (searchText === "") {
      setIsValidSearch(false);
      store.set.searched(false);
      return;
    }
    const regex = "[A-Za-z0-9]+-[A-Za-z0-9]+";
    let formattedSku = searchText;
    if (!formattedSku.match(regex)) {
      setIsValidSearch(false);
      toast.error("Invalid sku. Please enter a sku in the format XXXXXX-XXX");
      return;
    } else {
      formattedSku = searchText.replace("-", "_");
    }
    const [urls, angleArray] = await FetchImagesApi.FetchNikeImagesFromNike({
      sku: formattedSku,
      width: 1500,
      height: 1500,
    });
    toast.success(`Found ${urls?.length} images for ${searchText}`);
    store.set.images(urls);
    store.set.angles(angleArray);
    store.set.searched(false);
    navigate("/");
  };

  return (
    <Box
      onSubmit={(e) => handleSearch(e)}
      component="form"
      style={{
        height: "6ch",
        display: "flex",
        alignItems: "center",
        backgroundColor: "darkgray",
        borderRadius: "10px",
        padding: ".15ch",
        width: "20ch",
      }}
    >
      <Search sx={{ width: "3ch" }} onClick={(e) => handleSearch(e)} />
      <TextField
        type="text"
        value={searchText}
        onChange={onSearchChange}
        error={!isValidSearch}
        helperText={!isValidSearch && "Invalid sku"}
        variant="standard"
        style={{
          height: "4ch",
          width: "120px",
        }}
      />
      {searchText !== "" && <Cancel sx={{ width: "3ch" }} onClick={onReset} />}
    </Box>
  );
}

export default SkuSearch;
