export interface AIModel {
  id: string;
  name: string;
}

export interface AIProvider {
  id: string;
  name: string;
  models: AIModel[];
}

export const AI_PROVIDERS: AIProvider[] = [
  {
    id: "Gemini",
    name: "Google Gemini",
    models: [
      { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash (Recommended)" },
      { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro (High Quality)" },
      { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash (Latest)" },
    ],
  },
  {
    id: "Ollama",
    name: "Local Llama 3 (Ollama)",
    models: [
      { id: "llama3:latest", name: "Llama 3 (Local)" },
      { id: "llama3.1:latest", name: "Llama 3.1 (Local)" },
      { id: "llama3.2:latest", name: "Llama 3.2 (Local)" },
    ],
  },
];
