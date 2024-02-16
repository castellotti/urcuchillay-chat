import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5_16K = 'gpt-35-turbo-16k',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4 = 'gpt-4',
  LLAMA_2_7B = 'llama-2-7b-chat',
  LLAMA_2_13B = 'llama-2-13b-chat',
  LLAMA_2_70B = 'llama-2-70b-chat',
  MISTRAL_7B = 'mistral-7b-instruct',
  MIXTRAL_8X7B = 'mixtral-8x7b-instruct',
  PHI_2 = 'phi-2',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.MISTRAL_7B;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5 Turbo',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5 Turbo',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5 Turbo 16k',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.LLAMA_2_7B]: {
    id: OpenAIModelID.LLAMA_2_7B,
    name: 'Llama 2 7B',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.LLAMA_2_13B]: {
    id: OpenAIModelID.LLAMA_2_13B,
    name: 'Llama 2 13B',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.LLAMA_2_70B]: {
    id: OpenAIModelID.LLAMA_2_70B,
    name: 'Llama 2 70B',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.MISTRAL_7B]: {
    id: OpenAIModelID.MISTRAL_7B,
    name: 'Mistral 7B',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.MIXTRAL_8X7B]: {
    id: OpenAIModelID.MIXTRAL_8X7B,
    name: 'Mixtral 8x7B',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.PHI_2]: {
    id: OpenAIModelID.PHI_2,
    name: 'Phi-2',
    maxLength: 12000,
    tokenLimit: 4000,
  },
};
