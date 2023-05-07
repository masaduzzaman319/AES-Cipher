import React, { useState } from "react";
import CopyIcon from "@mui/icons-material/FileCopy";

import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CryptoJS from "crypto-js";

export default function Encryption() {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const handlePlaintextChange = (event) => {
    setPlaintext(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleEncryptClick = () => {
    const ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString();
    setCiphertext(ciphertext);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(ciphertext);
  };

  const handleClearClick = () => {
    setPlaintext("");
    setKey("");
    setCiphertext("");
  };

  return (
    <Box width="50%" m="auto">
      <Stack gap={2} alignItems="left">
        <TextField
          label="Plaintext"
          value={plaintext}
          onChange={handlePlaintextChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Key"
          value={key}
          onChange={handleKeyChange}
          variant="outlined"
          margin="normal"
        />
        <Button
          sx={{
            m: "auto",
            width: "70%",
            borderRadius: "20px",
            fontSize: "1.2rem",
          }}
          variant="contained"
          onClick={handleEncryptClick}
        >
          Encrypt
        </Button>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Encrypted Text:
        </Typography>
        <Stack direction="row" alignItems="center">
          <TextField
            label="Ciphertext"
            value={ciphertext}
            variant="outlined"
            margin="normal"
            sx={{ fontSize: "1.2rem", flexGrow: 1 }}
          />
          {ciphertext && (
            <IconButton aria-label="copy" onClick={handleCopyClick}>
              <CopyIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>

      <Stack my={3} alignItems="center" sx={{ width: "100%" }}>
        <Button
          variant="outlined"
          onClick={handleClearClick}
          sx={{ width: "70%" }}
        >
          Clear
        </Button>
      </Stack>
    </Box>
  );
}
