import React, { useState, useEffect, useMemo } from 'react';
import InputMask from 'react-input-mask';
import Box from "@mui/material/Box";
import { Card, CardContent, Grid, Stack, Typography, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import StarRounded from "@mui/icons-material/StarRounded";
import RemoveIcon from '@mui/icons-material/Remove';
import Switch from '@mui/material/Switch';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from "@mui/system";
import lightGreenCheck from "../assets/lightGreenCheck.png";
import darkCheck from "../assets/darkCheck.png";

const PriceTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "30px",
  lineHeight: "41px",
  letterSpacing: "0.025em",
});

const PriceTitleTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "30px",
  lineHeight: "41px",

  color: "#fff",
  textAlign: "center",
  letterSpacing: "0.025em",
});

const PriceTimeTypography = styled(Typography)({
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "27px",
  letterSpacing: "0.025em",

  color: "#4783F0",
});

const PriceListStack = styled(Stack)({
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
          type: 'button'
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
          type: 'button'
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
  border-radius: 8px;
  margin: 0 8px;
  padding: 6px 12px;
  outline: 0;
  min-width: 0;
  width: 3rem;
  text-align: center;

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  type: button;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 20px;
  height: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
    border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);

const Prices = ({ TextTypography, ContainedButton, ButtonTypography }) => {

  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [apiEnabled, setApiEnabled] = useState(false);
  const [campaignsEnabled, setCampaignsEnabled] = useState(false);
  const [integrationsEnabled, setIntegrationsEnabled] = useState(false);
  const [attendees, setAttendees] = useState(1);
  const [whatsapp, setWhatsapp] = useState(1);
  const [sectors, setSectors] = useState(1);
  const [total, setTotal] = useState(0);
  const [emailError, setEmailError] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const weights = useMemo(() => ({
    api: 100,
    campaigns: 100,
    integrations: 200,
    attendees: 30,
    whatsapp: 20,
    sectors: 15,
  }), []);

  useEffect(() => {
    const calculateTotal = () => {
      let newTotal = 200;
      newTotal += apiEnabled ? weights.api : 0;
      newTotal += campaignsEnabled ? weights.campaigns : 0;
      newTotal += integrationsEnabled ? weights.integrations : 0;
      newTotal += attendees * weights.attendees;
      newTotal += whatsapp * weights.whatsapp;
      newTotal += sectors * weights.sectors;
      setTotal(newTotal);
    };

    calculateTotal();
  }, [apiEnabled, campaignsEnabled, integrationsEnabled, attendees, whatsapp, sectors, weights]);

  const handleNumberInputChange = (setter) => (event, value) => {
    const numValue = Math.max(value, 1);
    setter(numValue);
  };

  const handleSwitchChange = (setter) => (event) => {
    setter(event.target.checked);
  };

  const handleEmailValidation = (e) => {
    const emailValue = e.target.value;
    const isValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(emailValue);
    setEmail(emailValue);
    setEmailError(!isValid);
  };

  // Função para enviar os dados para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Dados a serem enviados para o backend
    const requestData = {
      emailCliente: email,
      telefoneCliente: telefone,
      apiEnabled,
      campaignsEnabled,
      integrationsEnabled,
      attendees,
      whatsapp,
      sectors,
      total,
    };

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        setStatusMessage('E-mail enviado com sucesso!');
      } else {
        const errorText = await response.text();  // Pega a resposta como texto
        setStatusMessage(`Erro: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      setStatusMessage(`Erro: ${error.message}`);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.34))",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#60b55a",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <Stack
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <PriceTitleTypography
                sx={{
                  paddingTop: "20px",
                }}
              >
                {" "}
                Grátis{" "}
              </PriceTitleTypography>{" "}
              <TextTypography
                sx={{
                  textAlign: "center",
                  color: "#FCEBEB",
                }}
              >
                Avaliação
              </TextTypography>
            </Stack>
            <StarRounded
              sx={{
                color: "#f1edf3",
                position: "absolute",
                marginLeft: "290px",
                width: "50px",
                height: "50px",
              }}
            />
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography
                sx={{
                  color: "#60b55a",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  fontSize: "24px"
                }}
              >
                R$ 00,00
              </PriceTypography>
              <PriceTimeTypography sx={{ color: "#60b55a" }}>
                /mês
              </PriceTimeTypography>
            </Box>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Respostas Rápidas
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Kanban
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Tarefas
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Agendamento
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Tags
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Relatórios
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                3 Atendentes
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                3 Conexões com Whatsapp
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                3 Setores
              </TextTypography>
            </PriceListStack>
            <ContainedButton
              sx={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center",
              }}
              variant="contained"
              href="https://chat.fernasoft.com.br/signup"
              target="_blank"
              color="warning"
            >
              <ButtonTypography sx={{ color: "#fff" }}>
                {" "}
                Teste agora{" "}
              </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.34))",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",
              background: "#25385C",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <PriceTitleTypography
              sx={{
                paddingTop: "35px",
              }}
            >
              {" "}
              Personalize seu plano{" "}
            </PriceTitleTypography>
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography
                sx={{
                  color: "#25385C",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  fontSize: "24px"
                }}>
                R$ {total.toFixed(2)}
              </PriceTypography>
              <PriceTimeTypography sx={{ color: "#25385C" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ fontSize: "18px", marginRight: "auto" }}>
                Respostas Rápidas
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ fontSize: "18px", marginRight: "auto" }}>
                Kanban
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ fontSize: "18px", marginRight: "auto" }}>
                Tarefas
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ fontSize: "18px", marginRight: "auto" }}>
                Agendamento
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ fontSize: "18px", marginRight: "auto" }}>
                Tags
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ fontSize: "18px", marginRight: "auto" }}>
                Relatórios
              </TextTypography>
            </PriceListStack>
            <form onSubmit={handleSubmit}>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{
                  fontSize: "18px",
                  margin: "5px auto 5px 0"
                }}>
                  API
                </TextTypography>
                <Switch
                  checked={apiEnabled}
                  onChange={handleSwitchChange(setApiEnabled)}
                  {...label} defaultChecked={false} sx={{
                    marginRight: "25px", "& .MuiSwitch-switchBase": {
                      color: "#757575",
                    },
                    "& .MuiSwitch-switchBase + .MuiSwitch-track": {
                      backgroundColor: "#3c3c3c",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#4caf50",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#81c784",
                    },
                  }} />
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ fontSize: "18px", margin: "5px auto 5px 0" }}>
                  Campanhas
                </TextTypography>
                <Switch checked={campaignsEnabled}
                  onChange={(e) => setCampaignsEnabled(e.target.checked)}
                  {...label} defaultChecked={false} sx={{
                    marginRight: "25px", "& .MuiSwitch-switchBase": {
                      color: "#757575",
                    },
                    "& .MuiSwitch-switchBase + .MuiSwitch-track": {
                      backgroundColor: "#3c3c3c",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#4caf50",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#81c784",
                    },
                  }} />
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ fontSize: "18px", margin: "5px auto 5px 0" }}>
                  Integrações
                </TextTypography>
                <Switch checked={integrationsEnabled}
                  onChange={(e) => setIntegrationsEnabled(e.target.checked)}
                  {...label} defaultChecked={false} sx={{
                    marginRight: "25px", "& .MuiSwitch-switchBase": {
                      color: "#757575",
                    },
                    "& .MuiSwitch-switchBase + .MuiSwitch-track": {
                      backgroundColor: "#3c3c3c",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#4caf50",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#81c784",
                    },
                  }} />
              </PriceListStack>

              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ fontSize: "18px", margin: "5px auto 5px 0" }}>
                  Atendentes
                </TextTypography>
                <NumberInput value={attendees}
                  defaultValue={1} min={1} max={99}
                  onChange={handleNumberInputChange(setAttendees)}
                  step={1} />
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ fontSize: "18px", margin: "5px auto 5px 0" }}>
                  Conexão com Whatsapp
                </TextTypography>
                <NumberInput value={whatsapp}
                  defaultValue={1} min={1} max={5}
                  onChange={handleNumberInputChange(setWhatsapp)}
                  step={1} />
              </PriceListStack>
              <PriceListStack direction="row">
                <img src={darkCheck} alt=""></img>
                <TextTypography sx={{ fontSize: "18px", margin: "5px auto 5px 0" }}>
                  Setores
                </TextTypography>
                <NumberInput value={sectors}
                  defaultValue={1} min={1} max={99}
                  onChange={handleNumberInputChange(setSectors)}
                  step={1} />
              </PriceListStack>

              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                error={emailError}  // Indica o erro visualmente
                helperText={emailError ? "Por favor, insira um e-mail válido." : ''}  // Mostra a mensagem de erro
                inputProps={{
                  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                  title: "Por favor, insira um e-mail válido."
                }}
                onChange={handleEmailValidation}  // Verifica a validação em tempo real
                sx={{
                  marginTop: "20px",
                  maxWidth: "80%",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    "&.Mui-focused fieldset": {
                      borderColor: emailError ? "red" : "#25385C",  // Cor da borda ao focar
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: emailError ? "red" : "#25385C",  // Cor do rótulo quando há erro
                  },
                }}
              />
              <InputMask
                mask="(99) 99999-9999"
                value={telefone}  // Passe o valor diretamente
                onChange={(e) => setTelefone(e.target.value)}  // Passe o onChange diretamente
              >
                {(inputProps) => (
                  <TextField
                    {...inputProps}
                    label="Telefone"
                    type="tel"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                      marginTop: "20px",
                      maxWidth: "80%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        "&.Mui-focused fieldset": {
                          borderColor: "#25385C", // Cor da borda quando o campo está focado
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#25385C", // Cor do rótulo quando o campo está focado
                      },
                    }}
                  />
                )}
              </InputMask>

              <ContainedButton
                sx={{
                  marginTop: "25px",
                  marginBottom: "25px",
                  textAlign: "center"
                }}
                variant="contained"
                type="submit"  // O tipo submit disparará o handleSubmit
                color="danger"
              >
                <ButtonTypography sx={{ color: "#fff" }}>
                  Contrate agora
                </ButtonTypography>
              </ContainedButton>
              {statusMessage && (
                <p style={{ color: statusMessage.includes('Erro') ? 'red' : 'green' }}>
                  {statusMessage}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Prices;
