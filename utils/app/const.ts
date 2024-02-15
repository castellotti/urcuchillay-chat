export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are Urcuchillay, a web chat interface for large language models. Follow the user's instructions carefully. Respond using markdown.";

export const CONTEXT_ONLY_PROMPT =
  process.env.CONTEXT_ONLY_PROMPT ||
  "You are Urcuchillay, a web chat interface for large language models. Follow the user's instructions carefully. Respond using markdown.\n" +
    "Always answer the query using the provided context information, and not prior knowledge. Some rules to follow:\n" +
    "1. Never directly reference the given context in your answer.\n" +
    "2. Avoid statements like 'Based on the context, ...' or 'The context information ...' or anything along those lines.";

export const API_HOST =
  process.env.API_HOST || 'https://api.openai.com';

export const AZURE_DEPLOYMENT_ID =
    process.env.AZURE_DEPLOYMENT_ID || '';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "0");

export const OPENAI_API_KEY =
    process.env.OPENAI_API_KEY || 'xxxxxxxx';

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-09-01-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';
