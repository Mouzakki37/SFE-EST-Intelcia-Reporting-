export const environment = {
  production: true,
  appVersion: 'v713demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: false,
  apiUrl: 'http://dev-myteams.intelcia.com',
  imgUrl: 'https://myshift2.intelcia.com/api/teams/picture?username=',
  clients: ['portal-admin'],
  oauth : {
    basic: {
      url: ['/login', '#/login'],
      roles: ['ROLE_BASIC_AUTH']
    },
    token: 'http://dev.oauth.intelcia.com/uaa/oauth/token',
    authorize: 'http://dev.oauth.intelcia.com/uaa/oauth/authorize',
    state: 'INTELCIA_OAUTH_SESSION_STATE',
    code: 'INTELCIA_OAUTH_SESSION_CODE',
    remoteUser: 'INTELCIA_OAUTH_REMOTE_USER',
    scope: 'openid',
    secret: '0eazudRWsUwWL9UL',
    client_id: 'portal-admin',
    response_type: 'code',
    redirectTo: 'http://dev-myteams.intelcia.com',
    logOut: 'http://dev.oauth.intelcia.com/uaa/logout'
  }
};
