require('dotenv').config();
const nodemailer = require('nodemailer');

// Função para enviar o e-mail
const sendEmail = async (data) => {
    // Configura o transporte SMTP usando as variáveis do .env
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Defina o corpo do e-mail
    const mailOptions = {
        from: '"Fernasoft Chat" <' + process.env.SMTP_USER + '>',
        to: 'fernasoft@fernacom.com.br',
        subject: 'Novo Pedido de Assinatura Chat',
        html: `
      <h3>Informações do cliente</h3>
      <p><strong>Email do cliente:</strong> ${data.emailCliente}</p>
      <p><strong>Telefone do cliente:</strong> ${data.telefoneCliente}</p>
      <h3>Configurações</h3>
      <p><strong>API:</strong> ${data.apiEnabled ? 'Sim' : 'Não'}</p>
      <p><strong>Campanhas:</strong> ${data.campaignsEnabled ? 'Sim' : 'Não'}</p>
      <p><strong>Integrações:</strong> ${data.integrationsEnabled ? 'Sim' : 'Não'}</p>
      <h3>Quantidade</h3>
      <p><strong>Atendentes:</strong> ${data.attendees}</p>
      <p><strong>Conexões com WhatsApp:</strong> ${data.whatsapp}</p>
      <p><strong>Setores:</strong> ${data.sectors}</p>
      <h3>Valor Final</h3>
      <p><strong>Total:</strong> R$ ${data.total.toFixed(2)}</p>
    `,
    };

    // Envia o e-mail
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('E-mail enviado: %s', info.messageId);
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error.message);  // Loga o erro com mais detalhes
        throw new Error('Erro ao enviar e-mail: ' + error.message);
    }
};

module.exports = sendEmail;
