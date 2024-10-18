const express = require('express');
const cors = require('cors');
const sendEmail = require('./sendEmail');
const app = express();
require('dotenv').config();  // Carrega as variáveis do .env

app.use(cors());  // Permite requisições cross-origin
app.use(express.json());

app.post('/send-email', async (req, res) => {
  console.log('Rota /send-email foi chamada');
  const {
    emailCliente,
    telefoneCliente,
    apiEnabled,
    campaignsEnabled,
    integrationsEnabled,
    attendees,
    whatsapp,
    sectors,
    total
  } = req.body;

  // Chama a função que envia o e-mail
  try {
    await sendEmail({
      emailCliente,
      telefoneCliente,
      apiEnabled,
      campaignsEnabled,
      integrationsEnabled,
      attendees,
      whatsapp,
      sectors,
      total,
    });
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro no envio do e-mail:', error.message);
    res.status(500).json({ message: 'Erro ao enviar e-mail', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});