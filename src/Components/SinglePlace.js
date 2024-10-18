import React from "react";
import Box from "@mui/material/Box";
import { Grid, Stack } from "@mui/material";

const SinglePlace = ({ SubtitleTypography, TextTypography, ContainedButton, ButtonTypography, }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={12} md={12} xs={12} sx={{ paddingBottom: "100px" }}>
        <Box
          sx={{
            flexDirection: "column",
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Stack direction="column" spacing={2}>
            <SubtitleTypography>Transforme cada interação em uma oportunidade com o Fernasoft Chat!</SubtitleTypography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SinglePlace;
