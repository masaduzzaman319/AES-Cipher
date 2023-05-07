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

export default function Decryption() {
  const [ciphertext, setCiphertext] = useState("");
  const [key, setKey] = useState("");
  const [decryptedtext, setDecryptedtext] = useState("");

  const handleCiphertextChange = (event) => {
    setCiphertext(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleDecryptClick = () => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const decryptedtext = bytes.toString(CryptoJS.enc.Utf8);
    setDecryptedtext(decryptedtext);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(ciphertext);
  };

  const handleClearClick = () => {
    setDecryptedtext("");
    setKey("");
    setCiphertext("");
  };

  return (
    <Box width="50%" m="auto">
      <Stack gap={2} alignItems="left">
        <TextField
          label="Ciphertext"
          value={ciphertext}
          onChange={handleCiphertextChange}
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
            width: "50%",
            borderRadius: "20px",
            fontSize: "1.2rem",
          }}
          variant="contained"
          onClick={handleDecryptClick}
        >
          Decrypt
        </Button>

        <Stack>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Decrypted text:
          </Typography>
          <Stack direction="row" alignItems="center">
            <TextField
              label="Plaintext"
              value={decryptedtext}
              variant="outlined"
              margin="normal"
              sx={{ fontSize: "1.2rem", flexGrow: 1 }}
            />
            {decryptedtext && (
              <IconButton aria-label="copy" onClick={handleCopyClick}>
                <CopyIcon />
              </IconButton>
            )}
          </Stack>
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
