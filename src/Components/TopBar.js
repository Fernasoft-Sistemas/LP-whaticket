import React, { useState, useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import logo from "../assets/logo_fernasoft_chat_verde.svg";

const TopBar = ({ ContainedButton, ButtonTypography }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Quando a rolagem é maior que 50px, atualize o estado para indicar que a página foi rolada
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpar o eventListener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          zIndex: 100,
          fontStyle: "normal",
          fontSize: "20px",
          letterSpacing: "0.025em",
          position: "fixed",
          width: "100%",
          top: 0,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "#fff",
          height: "90px",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.1))",
          transition: "background-color 0.3s ease",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            paddingTop: "10px",
            height: "75px",
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

          <Stack direction="row" spacing={2}>
            <Button
              href="https://chat.fernasoft.com.br/login"
              target="_blank"
              sx={{
                borderRadius: "10px",
                width: "100px",
                height: "55px",
                textTransform: "none",
              }}
              color="secondary"
            >
              <ButtonTypography>Entrar</ButtonTypography>
            </Button>
            <ContainedButton
              variant="contained"
              color="primary"
              href="https://chat.fernasoft.com.br/signup"
              target="_blank"
            >
              <ButtonTypography>Teste agora</ButtonTypography>
            </ContainedButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
