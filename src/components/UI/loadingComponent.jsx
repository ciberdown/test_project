import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import NoNetworkIcon from "./noNetwork";

export default function Loading(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {props.loading}
      {props.loading === "Loading..." && <LoadingIcon />}
      {props.loading === "network error!" && <NoNetworkIcon />}
    </div>
  );
}

function LoadingIcon() {
  return (
    <Box fontSize="small">
      <CircularProgress size={20} thickness={4} value={100} />
    </Box>
  );
}
