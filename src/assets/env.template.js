(function(window) {
    window.env = window.env || {};
  
    window["env"]["baseURL"] = "${ANG_BASE_URL}";
    window["env"]["apiURL"] = "${ANG_API_URL}";
    window["env"]["keycloakDomain"] = "${ANG_KC_DOMAIN}";
    window["env"]["keycloakUrlPrefix"] = "${ANG_KC_PREFIX}";
    window["env"]["appIdRealm"] = "${ANG_KC_REALM}";
    window["env"]["appIdClientId"] = "${ANG_KC_CLIENT_ID}";       
  })(this);
