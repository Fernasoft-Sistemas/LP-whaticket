import React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Stack } from "@mui/material";
import image1 from "../assets/company.svg";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';

const Intro = ({
  SubtitleTypography,
  TextTypography,
  ContainedButton,
  ButtonTypography,
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingTop: "10px", paddingBottom: "100px", marginTop: "90px" }}
    >
      <Grid
        item
        lg={6}
        md={8}
        xs={12}
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingRight: "78px",
            maxWidth: "666px",

            letterSpacing: "0.025em",
            color: "#302F2F",
          }}
        >
          <Stack direction="column" spacing={2}>
            <SubtitleTypography>
              Todos os seus atendentes no mesmo número de Whatsapp.
            </SubtitleTypography>

            <TextTypography paddingBottom="50px">
              Organize o atendimento da sua empresa com o Fernasoft Chat, centralize
              todos os atendimentos em um único lugar e tenha visão clara de
              toda a comunicação com os seus clientes.
            </TextTypography>

            <Stack direction="row" spacing={2} alignItems="center">
              <ContainedButton
                variant="contained"
                color="primary"
                onClick={() => {
                  const element = document.getElementById('target-plans');
                  if (element) {
                    const yOffset = -100; // Deslocamento opcional
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                <ButtonTypography>Contrate agora</ButtonTypography>
              </ContainedButton>

              <Button
                disableRipple  // Desabilita o efeito ripple
                sx={{
                  borderRadius: "100px",
                  '&:hover, &:focus, &:active': {
                    backgroundColor: 'transparent',
                  }
                }}
                onClick={() => {
                  const element = document.getElementById('target-element');
                  if (element) {
                    const yOffset = -200;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                <IconButton
                  disableRipple  // Desabilita o efeito ripple no IconButton
                  sx={{
                    color: "#60b55a",
                    '&:hover, &:focus, &:active': {
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  <PlayCircleIcon sx={{
                    borderRadius: "30px",
                    padding: "0px",
                    margin: "0px",
                    fontSize: 50,
                    color: "#60b55a",
                    animation: "pulsate-shadow 1.5s infinite",
                    "@keyframes pulsate-shadow": {
                      "0%": {
                        boxShadow: "0 0 0 0 rgba(96, 181, 90, 0.7)",
                      },
                      "50%": {
                        boxShadow: "0 0 15px 5px rgba(96, 181, 90, 0.5)",
                      },
                      "100%": {
                        boxShadow: "0 0 0 0 rgba(96, 181, 90, 0.7)",
                      }
                    }
                  }} />
                  <ButtonTypography sx={{ marginLeft: 2 }}>
                    Apresentação
                  </ButtonTypography>
                </IconButton>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Grid>

      <Grid
        item
        md={6}
        xs={12}
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "100px",
          }}
        >
          <img src={image1} width={400} alt="" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Intro;
