import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material";
import App from "./components/App";

const theme = createTheme({
  direction: 'rtl'
});
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
