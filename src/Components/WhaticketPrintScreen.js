import Box from "@mui/material/Box";
import React from "react";
import funcionalidades from "../assets/funcionalidades.mp4"

const WhaticketPrintScreen = ({ SubtitleTypography }) => {
  return (
    <Box
      sx={{
        display: { xs: "none", xl: "flex" },
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", // Alinha os itens em coluna para colocar o título acima do vídeo
        margin: "40px 0 190px 0",
        backgroundColor: "#60b55a",
        width: "100vw",  // Faz o fundo cobrir toda a largura da viewport
        height: "600px",
        position: "relative",  // Necessário para garantir que o vídeo fique sobre o fundo
        left: "50%",
        transform: "translateX(-50%)", // Garante que o fundo comece de uma ponta a outra
      }}
      id="target-element"
    >
      <SubtitleTypography
        sx={{
          color: "#ffffff", // Cor do texto branca
          fontSize: "32px", // Tamanho do título
          marginBottom: "20px" // Espaço entre o título e o vídeo
        }}
      >
        Apresentação
      </SubtitleTypography>

      <video
        src={funcionalidades}
        style={{
          maxWidth: "40%",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)"
        }}
        controls
        controlsList="nodownload"  // Desativa o botão de download
        onContextMenu={(e) => e.preventDefault()}  // Desativa o clique com o botão direito
        alt="Demonstração do sistema"
      />
    </Box>
  );
};

export default WhaticketPrintScreen;
