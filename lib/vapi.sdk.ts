import Vapi from '@vapi-ai/web';

const x = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN as string;
export const vapi = new Vapi(x);