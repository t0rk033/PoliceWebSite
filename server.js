const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors()); // Adiciona o middleware cors para permitir solicitações de diferentes origens

app.post('/ask-assistant', async (req, res) => {
  try {
    const { prompt, max_tokens, temperature } = req.body;
    const apiKey = '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'; // Substitua pela sua chave de API OpenAI válida
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      { prompt, max_tokens, temperature },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
