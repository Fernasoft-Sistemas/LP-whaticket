import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import TeamPana from "../assets/Teampana.svg";
import response from "../assets/response.svg";
import ViewAgendaOutlined from '@mui/icons-material/ViewAgendaOutlined';
import EventAvailableOutlined from '@mui/icons-material/EventAvailableOutlined';
import LabelOutlined from '@mui/icons-material/LabelOutlined';
import reports from "../assets/reports.svg";

import {
  AccountTreeOutlined,
  BadgeOutlined,
  ForumOutlined,
} from "@mui/icons-material";

const Cards = ({ CardSubtitleTypography, TextTypography, CardBox }) => {
  return (
    <Grid container spacing={10} sx={{ paddingBottom: "200px" }}>
      <Grid item md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={TeamPana} width={415} alt="" />
        </Box>

        <Stack direction="column" spacing={2}>
          <CardSubtitleTypography>Multiplos atendentes</CardSubtitleTypography>

          <TextTypography sx={{ textAlign: "center" }}>
            Cadastre toda a sua equipe no Fersnasoft. Cada atendente recebe o
            atendimento de forma organizada, e você pode acompanhar todos eles
            em tempo real.
          </TextTypography>
        </Stack>
      </Grid>
      <Grid item md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={response} width={275} alt="" />
        </Box>
        <Stack direction="column" spacing={2}>
          <CardSubtitleTypography>Respostas rápidas</CardSubtitleTypography>

          <TextTypography sx={{ textAlign: "center" }}>
            Chega de ficar repetindo a mesma mensagem várias vezes. Basta
            digitar “/” para acessar a sua lista de mensagens pré cadastradas.
          </TextTypography>
        </Stack>
      </Grid>
      <Grid item md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={reports} width={275} alt="" />
        </Box>
        <Stack direction="column" spacing={2}>
          <CardSubtitleTypography>
            Relatório de atendimentos
          </CardSubtitleTypography>

          <TextTypography sx={{ textAlign: "center" }}>
            Tenha uma visão geral do tempo de resolução, tempo para a primeira
            resposta e quantidade de atendimentos, com gráficos por período,
            atendente, filas e conexões.
          </TextTypography>
        </Stack>
      </Grid>

      <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "20px",
              width: "250px",
              alignItems: "flex-start", // Alinha o conteúdo ao topo
              justifyContent: "flex-start", // Alinha ao topo verticalmente
              height: "100%", // Garante que o card ocupe a altura total
            }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <AccountTreeOutlined color="primary" fontSize="large"></AccountTreeOutlined>
              Separação de departamentos
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Cada ticket pode ser atribuído a uma fila de atendimento,
              facilitando a organização e priorização dos atendimentos.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>

      <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "20px",
              width: "250px",
              alignItems: "flex-start", // Alinha o conteúdo ao topo
              justifyContent: "flex-start", // Alinha ao topo verticalmente
              height: "100%", // Garante que o card ocupe a altura total
            }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <BadgeOutlined color="primary" fontSize="large"></BadgeOutlined>
              Identificação do atendente
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Todas as mensagens enviadas pelo Fernasoft Chat levam o nome do
              atendente antes do texto. Assim o seu cliente sempre sabe com quem
              está falando.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>

      <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "20px",
              width: "250px",
              alignItems: "flex-start", // Alinha o conteúdo ao topo
              justifyContent: "flex-start", // Alinha ao topo verticalmente
              height: "100%", // Garante que o card ocupe a altura total
            }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <ForumOutlined color="primary" fontSize="large"></ForumOutlined>
              Chatbot automatizado
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Deixe a tecnologia trabalhar por você! Crie chatbots para separar
              seus atendimentos e levantar informações importantes de forma
              automática.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>

      <Box
        sx={{
          zIndex: "10",
          marginLeft: "-10px",
          marginRight: "-80px",
          width: "90vw",
          height: "138px",
          marginTop: "-50px",
          backgroundColor: "#203f1d",
          borderRadius: "82px 82px 82px 82px",
        }}
      ></Box>

      <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto", marginTop: "-130px" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "20px",
              width: "250px",
              justifyContent: "flex-start", // Alinha ao topo verticalmente
              height: "100%", // Garante que o card ocupe a altura total
            }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <ViewAgendaOutlined color="primary" fontSize="large"></ViewAgendaOutlined>
              Kanban
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Organize suas tarefas e acompanhe o andamento dos processos utilizando quadros Kanban.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>

      <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto", marginTop: "-130px" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "20px",
              width: "250px",
              alignItems: "center", // Alinha o conteúdo ao topo
              justifyContent: "flex-start", // Alinha ao topo verticalmente
              height: "100%", // Garante que o card ocupe a altura total
            }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <EventAvailableOutlined color="primary" fontSize="large"></EventAvailableOutlined>
              Agendamento
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Agende reuniões, atendimentos ou qualquer evento diretamente pelo sistema, garantindo uma organização eficiente.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>

      <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto", marginTop: "-130px" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "20px",
              width: "250px",
              justifyContent: "flex-start", // Alinha ao topo verticalmente
              height: "100%", // Garante que o card ocupe a altura total
            }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <LabelOutlined color="primary" fontSize="large"></LabelOutlined>
              Tags
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Utilize tags personalizadas para categorizar e organizar atendimentos de forma rápida e eficaz.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>

    </Grid>
  );
};

export default Cards;
