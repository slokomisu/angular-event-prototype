// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCsyTzFHVsVrYypXtdRgJN_DSEiyhR5meY',
    authDomain: 'facebook-event-aggregator.firebaseapp.com',
    databaseURL: 'https://facebook-event-aggregator.firebaseio.com',
    projectId: 'facebook-event-aggregator',
    storageBucket: 'facebook-event-aggregator.appspot.com',
    messagingSenderId: '863570320235'
  },
  initParams: {
    appId: '1902171126772893',
    xfbml: true,
    version: 'v2.10'
  }
};
