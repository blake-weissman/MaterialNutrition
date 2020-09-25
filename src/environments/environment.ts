import { EnvironmentConsts } from './MaterialNutritionEnvironmentConsts/consts';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: EnvironmentConsts.API_KEY,
    authDomain: "material-nutrition.firebaseapp.com",
    databaseURL: "https://material-nutrition.firebaseio.com",
    projectId: "material-nutrition",
    storageBucket: "material-nutrition.appspot.com",
    messagingSenderId: EnvironmentConsts.MESSAGING_SENDER_ID,
    appId: EnvironmentConsts.APP_ID,
    measurementId: EnvironmentConsts.MEASUREMENT_ID  
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

