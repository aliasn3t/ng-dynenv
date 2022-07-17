export const environment = {
  // Конфиг по умолчанию для prep/prod
  // ...
  // ...

  production: true,
  useStubs: false,

  baseURL: window["env"]["baseURL"] || '/app/',
  apiURL: window["env"]["apiURL"] || '/app-gate',
  keycloakDomain: window["env"]["keycloakDomain"] || 'auth.keycloak.domain',
  keycloakUrlPrefix: window["env"]["keycloakUrlPrefix"] || '',
  appIdRealm: window["env"]["appIdRealm"] || 'app',
  appIdClientId: window["env"]["appIdClientId"] || 'app-v2',
};
