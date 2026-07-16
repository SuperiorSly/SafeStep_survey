/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production n8n Webhook URL that receives survey submissions. */
  readonly VITE_N8N_WEBHOOK_URL: string
  /** Optional bearer token, if the n8n webhook is protected with Header Auth. */
  readonly VITE_N8N_WEBHOOK_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
