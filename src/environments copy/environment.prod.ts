export const environment = {
  production: true,
  appVersion: 'v713demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: false,
  apiUrl: 'https://myteam.intelcia.com',
  imgUrl: 'https://myshift2.intelcia.com/api/teams/picture?username=',
  clients: ['portal-admin'],
  oauth : {
    basic: {
      url: ['/login', '#/login'],
      roles: ['ROLE_BASIC_AUTH']
    },
    token: 'https://oauth.intelcia.com/uaa/oauth/token',
    authorize: 'https://oauth.intelcia.com/uaa/oauth/authorize',
    state: 'INTELCIA_OAUTH_SESSION_STATE',
    code: 'INTELCIA_OAUTH_SESSION_CODE',
    remoteUser: 'INTELCIA_OAUTH_REMOTE_USER',
    scope: 'openid',
    secret: 'AyG9Ah16RCz1y978v',
    client_id: 'myteam',
    response_type: 'code',
    redirectTo: 'https://myteam.intelcia.com',
    logOut: 'https://oauth.intelcia.com/uaa/logout'
  }
};
