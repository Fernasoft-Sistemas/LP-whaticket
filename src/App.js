import {
  Box,
  Container,
  Button,
  CssBaseline,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import TopBar from "./Components/TopBar";
import Page from "./Page";
import { styled } from "@mui/system";

import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import logo from "./assets/logo_fernasoft_chat_branca.svg";

const ContainedButton = styled(Button)({
  borderRadius: "10px",
  width: "188px",
  height: "55px",
  textTransform: "none",
  filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.2))",
});

const CardBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "330px",
  height: "340px",
  backgroundColor: "#e2f1e1",
  borderRadius: "40px 40px 40px 40px",
  filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
});

const ButtonTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "27px",
  letterSpacing: "0.025em",
  filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
});

const SubtitleTypography = styled(Typography)({
  fontFamily: "Nunito, sans-serif",
  variant: "h2",
  component: "div",
  fontSize: "48px",
  fontWeight: "800",
  lineHeight: "65px",
});

const CardSubtitleTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "33px",
  letterSpacing: "0.025em",
  textAlign: "center",
});

const TextTypography = styled(Typography)({
  fontFamily: "Nunito, sans-serif",
  variant: "body1",
  component: "div",
  fontSize: "20px",
  fontWeight: "400",
  lineHeight: "27px",
});

const FooterBottomWave = styled(Box)({
  position: "relative",
  height: "150px",
  width: "100%",
  background: "#60b55a",
});

const FooterTopWave = styled(Box)({
  position: "absolute",
  borderRadius: "100%",
  width: "100%",
  height: "75px",
  backgroundColor: "#fff",
  right: "0px",
  top: "-40px",
  filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.15))",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#60b55a",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#4783F0",
    },
    warning: {
      main: "#60b55a",
    },
    danger: {
      main: "#25385C",
    },
    secondary: {
      main: "#121212",
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <div style={{ overflow: "hidden" }}>
          <TopBar
            ContainedButton={ContainedButton}
            ButtonTypography={ButtonTypography}
          />
          <Container
            sx={{
              backgroundColor: "#ffffff",
              zIndex: "100",
            }}
          >
            <Page
              ContainedButton={ContainedButton}
              ButtonTypography={ButtonTypography}
              SubtitleTypography={SubtitleTypography}
              TextTypography={TextTypography}
              CardSubtitleTypography={CardSubtitleTypography}
              CardBox={CardBox}
            />
          </Container>

          <FooterBottomWave>
            <FooterTopWave />
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{
                color: "#fff",
                paddingTop: "40px",
              }}
            >
              <Stack direction="row">
              <img
              style={{
                width: 300,
                height: "auto",
                marginTop: "-5px",
              }}
              src={logo}
              alt=""
            />
              </Stack>
              <TextTypography
                sx={{
                  marginTop: "100px",
                  fontSize: "15px",
                  color: "#e0e0e0",
                  position: "absolute",
                }}
              >
                By Fernacom Informática © 2024
              </TextTypography>

              <Stack direction="row" spacing={2}>
                <IconButton href="https://www.facebook.com/fernacominformatica" target="_blank" sx={{ color: "#fff" }}>
                  <Facebook />
                </IconButton>
                <IconButton href="https://www.instagram.com/fernacominformatica/" target="_blank" sx={{ color: "#fff" }}>
                  <Instagram />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/fernacom-inform%C3%A1tica-28672b269/" target="_blank" sx={{ color: "#fff" }}>
                  <LinkedIn />
                </IconButton>
              </Stack>
            </Stack>
          </FooterBottomWave>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
