const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Multi-LLM Backend!');
});

const getOllamaResponse = async (prompt, modelName) => {
  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: modelName,
      prompt,
      stream: false
    });

    let modelResponse = response.data.response;

    // Strip echoed prompt ONLY for DeepSeek
    if (modelName === 'deepseek-r1:latest' && modelResponse.startsWith(prompt)) {
      modelResponse = modelResponse.replace(prompt, '').trim();
    }

    // Remove <think> tags if present
    modelResponse = modelResponse.replace(/<\/?think>/gi, '').trim();

    return modelResponse;
  } catch (error) {
    console.error(`❌ Error from ${modelName}:`, error.message);
    return `❌ ${modelName} failed.`;
  }
};

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const results = await Promise.allSettled([
      getOllamaResponse(prompt, 'llama3.2:latest'),
      getOllamaResponse(prompt, 'llama2:latest'),
      getOllamaResponse(prompt, 'mistral:latest'),
      getOllamaResponse(prompt, 'deepseek-r1:latest')
    ]);

    const [llama3Result, llama2Result, mistralResult, deepseekResult] = results;

    const responses = {
      LLaMA3_2: llama3Result.status === 'fulfilled' ? llama3Result.value : llama3Result.reason,
      LLaMA2: llama2Result.status === 'fulfilled' ? llama2Result.value : llama2Result.reason,
      Mistral: mistralResult.status === 'fulfilled' ? mistralResult.value : mistralResult.reason,
      DeepSeekR1: deepseekResult.status === 'fulfilled' ? deepseekResult.value : deepseekResult.reason
    };

    res.json({ prompt, responses });
  } catch (err) {
    console.error('🔥 /generate route failed:', err);
    res.status(500).json({ error: 'Something went wrong in /generate route.' });
  }
});

// Test routes
app.post('/test-llama3', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3.2',
      prompt,
      stream: false
    });

    res.json({ LLaMA3_2: response.data.response });
  } catch (err) {
    console.error('LLaMA 3.2 Error:', err.message);
    res.status(500).json({ error: 'LLaMA 3.2 failed' });
  }
});

app.post('/test-llama2', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama2',
      prompt,
      stream: false
    });

    res.json({ LLaMA2: response.data.response });
  } catch (err) {
    console.error('LLaMA 2 Error:', err.message);
    res.status(500).json({ error: 'LLaMA 2 failed' });
  }
});

app.post('/test-mistral', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'mistral',
      prompt,
      stream: false
    });

    res.json({ Mistral: response.data.response });
  } catch (err) {
    console.error('Mistral Error:', err.message);
    res.status(500).json({ error: 'Mistral failed' });
  }
});

app.post('/test-deepseek', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    let response = await axios.post('http://localhost:11434/api/generate', {
      model: 'deepseek-r1',
      prompt,
      stream: false
    });

    let output = response.data.response;
    if (output.startsWith(prompt)) {
      output = output.replace(prompt, '').trim();
    }
    output = output.replace(/<\/?think>/gi, '').trim();

    res.json({ DeepSeekR1: output });
  } catch (err) {
    console.error('DeepSeek Error:', err.message);
    res.status(500).json({ error: 'DeepSeek-R1 failed' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});