import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Rejister from "./components/register";
import Search from "./components/search";
import { createTheme } from "@mui/material";

function App() {

  const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "500px",
        padding: "0",
        margin: "0px",
        display: "flex",
        justifyContent: "center",
        direction:'rtl'
      }}
    >
      <Routes>
        <Route path="/" element={<Rejister />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
