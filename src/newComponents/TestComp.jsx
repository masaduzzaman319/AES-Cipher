import React, { useState } from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Encryption from "./Encryption";
import Decryption from "./Decryption";

export default function App() {
  const [isEncryptionActive, setIsEncryptionActive] = useState(false);
  const [isDecryptionActive, setIsDecryptionActive] = useState(false);

  const handleEncryptionClick = () => {
    setIsEncryptionActive(true);
  };

  const handleDecryptionClick = () => {
    setIsDecryptionActive(true);
  };

  const handleCloseClick = () => {
    setIsEncryptionActive(false);
    setIsDecryptionActive(false);
  };

  return (
    <Box>
      <Typography variant="h2" align="center">
        AES
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{
          mb: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={handleEncryptionClick}
          sx={{
            ...(isEncryptionActive && {
              bgcolor: "green",
              color: "primary.contrastText",
            }),
          }}
        >
          Encryption
        </Button>
        <Button
          variant="contained"
          onClick={handleDecryptionClick}
          sx={{
            ...(isDecryptionActive && {
              bgcolor: "green",
              color: "primary.contrastText",
            }),
          }}
        >
          Decryption
        </Button>
      </Stack>
      <Box>{isEncryptionActive ? <Encryption /> : <Decryption />}</Box>

      <Stack my={3} alignItems="center">
        <Button variant="text" onClick={handleCloseClick}>
          Close
        </Button>
      </Stack>
    </Box>
  );
}
