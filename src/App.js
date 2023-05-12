import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Rejister from "./components/register";
import Search from "./components/search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl} >
      <ThemeProvider theme={theme}>
        <div
          className="App"
          style={{
            width: "100%",
            height: "500px",
            padding: "0",
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            direction: "rtl",
          }}
        >
          <Routes>
            <Route path="/" element={<Rejister />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
