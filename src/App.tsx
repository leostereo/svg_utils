import { Container, Box, Stack } from "@mui/material";
import React from "react";
import { NavBar } from "./components/NavBar";
import Main from "./router/main";

function App() {
  return (
    <Container
      fixed
      sx={{
        backgroundColor: "action.disabledBackground",
        height: "95vh",
        border: 1,
        my: 2,
        py: 1,
      }}
    >
      <Stack spacing={2}>
        <Box sx={{ border: 2 }}>
          <NavBar />
        </Box>
        <Box
          sx={{
            height: "75vh",
            display: "flex",
            justifyContent: "center",
            border: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              height: 400,
              border: 2,
            }}
          >
            <Main />
          </Box>
        </Box>
        <Box sx={{ border: 2 }}>BottomBar</Box>
      </Stack>
    </Container>
  );
}

export default App;
