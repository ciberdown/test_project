import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Search() {
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [allCities, setAllCities] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://rezayari.ir:8000/api/agency/getCity", {
      headers: {
        Authorization: "Bearer " + getAccessToken(),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCities(data.data);
        setAllCities(data.data);
      });
    fetch("https://rezayari.ir:8000/api/agency/getProvince", {
      headers: {
        Authorization: "Bearer " + getAccessToken(),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProvinces(data.data);
      });
  };
  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }
  function changeHandle(e) {
    const provinceName = e.target.innerText;
    if (provinceName === "") setCities(allCities);
    else
      provinces.map((item) => {
        if (item.name === provinceName) {
          const all = allCities; //to keep all cities somewhere
          setCities(all.filter((i) => i.provinceId === item.id));
        }
      });
  }
  return (
    <div className="search">
      <Autocomplete
        style={{ margin: "20px" }}
        disablePortal
        id="combo-box-demo"
        getOptionLabel={(option) => option.name}
        options={provinces}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Province" />}
        onChange={changeHandle}
      />
      <Autocomplete
        style={{ margin: "20px" }}
        disablePortal
        id="combo-box-demo"
        getOptionLabel={(option) => option.name}
        options={cities}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
    </div>
  );
}
