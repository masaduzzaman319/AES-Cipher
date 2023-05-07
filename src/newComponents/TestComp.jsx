import React, { useState } from "react";
import { Box, Stack, Button, Typography, Divider } from "@mui/material";
import Encryption from "./Encryption";
import Decryption from "./Decryption";

export default function App() {
  const [isEncryptionActive, setIsEncryptionActive] = useState(false);
  const [isDecryptionActive, setIsDecryptionActive] = useState(false);

  const handleEncryptionClick = () => {
    setIsEncryptionActive(true);
    setIsDecryptionActive(false);
  };

  const handleDecryptionClick = () => {
    setIsEncryptionActive(false);
    setIsDecryptionActive(true);
  };

  const handleCloseClick = () => {
    setIsEncryptionActive(false);
    setIsDecryptionActive(false);
  };

  return (
    <Box m={5} pt={3}>
      <Typography variant="h2" align="center" fontSize="3rem">
        AES
      </Typography>
      <Divider sx={{ my: 2 }} />
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
            bgcolor: "#5C469C",
            ...(isEncryptionActive && {
              bgcolor: "#1D267D",
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
            bgcolor: "#5C469C",
            ...(isDecryptionActive && {
              bgcolor: "#1D267D",
              color: "primary.contrastText",
            }),
          }}
        >
          Decryption
        </Button>
      </Stack>
      <Box>
        {isEncryptionActive ? <Encryption /> : null}
        {isDecryptionActive ? <Decryption /> : null}
      </Box>

      <Stack my={3} alignItems="center">
        <Button variant="text" onClick={handleCloseClick}>
          Back
        </Button>
      </Stack>
    </Box>
  );
}
