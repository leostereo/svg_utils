import { Container, Box, Stack } from "@mui/material";
import React from "react";

function App() {
  return (
    <Container fixed sx={{  height: '95vh',border: 1, my: 2, py:1 }}>
      <Stack spacing={2}>
        <Box sx={{ border: 2 }}>NavBar</Box>
        <Box sx={{  height: '75vh', display: "flex", justifyContent: "center", border: 2 , alignItems: 'center'}}>
          <Box
            sx={{
              width: "80%",
              height: 300,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          ></Box>
        </Box>
        <Box sx={{ border: 2 }}>BottomBar</Box>
      </Stack>
    </Container>
  );
}

export default App;
