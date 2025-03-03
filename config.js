import configJson from "./auth_config.json";

export function getConfig() {
  configJson.audience && configJson.audience !== "YOUR_API_INDENTIFIER"
    ? configJson.audience
    : null;

  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    ...(audience ? { audience } : null),
  };
}
