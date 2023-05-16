import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {props.loading}
      {props.loading === "Loading..." && <LoadingIcon />}
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
