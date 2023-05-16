import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({setURL, defaultValue}) {
  const handleChange = (event) => {
    setURL(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 100, margin: "10px", maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Channel</InputLabel>
        <Select
          defaultValue={defaultValue}
          label="channel"
          onChange={handleChange}
          inputProps={{
            name: 'channel',
            id: 'uncontrolled-native',
          }}
        >
          <MenuItem value={0}>apple</MenuItem>
          <MenuItem value={1}>tesla</MenuItem>
          <MenuItem value={2}>us</MenuItem>
          <MenuItem value={3}>techcrunch</MenuItem>
          <MenuItem value={4}>wjs.com</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
