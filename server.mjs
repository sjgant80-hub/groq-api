#!/usr/bin/env node
/**
 * groq-api · HTTP proxy for Groq
 * Sovereign estate wrapper for Groq · AI/LLM
 * Docs: https://console.groq.com/docs/quickstart
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'Groq' }));
  res.end(JSON.stringify({ name: 'groq-api', wraps: 'Groq', docs: 'https://console.groq.com/docs/quickstart' }));
}).listen(PORT, () => console.log('groq-api on', PORT));
