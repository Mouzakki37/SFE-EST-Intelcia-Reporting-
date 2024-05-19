// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appVersion: 'v713demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: false,
  apiUrl: 'http://localhost:7070',
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
    secret: '79c4aV31X8Eg52c',
    client_id: 'intranet-liferay',
    response_type: 'code',
    redirectTo: 'http://localhost:4300',
    logOut: 'https://oauth.intelcia.com/uaa/logout'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
