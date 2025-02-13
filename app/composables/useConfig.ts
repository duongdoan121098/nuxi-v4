export const useConfig = (): {
  host: string;
  path: string;
  apiKey: string;
  userCookies: string;
  userInfo: string;
} => {
  const config = useRuntimeConfig();
  return {
    host: config.public.apiBase,
    path: `/${config.public.apiPath}`,
    apiKey: config.apiSecret as string,
    userCookies: `player-${config.public.apiPath}-session`,
    userInfo:`player-${config.public.apiPath}-info`,
  };
};
