import { EnvironmentConsts } from './MaterialNutritionEnvironmentConsts/consts';

export const environment = {
  production: true,
  firebase: {
    apiKey: EnvironmentConsts.API_KEY,
    authDomain: "material-nutrition.firebaseapp.com",
    databaseURL: "https://material-nutrition.firebaseio.com",
    projectId: "material-nutrition",
    storageBucket: "material-nutrition.appspot.com",
    messagingSenderId: EnvironmentConsts.MESSAGING_SENDER_ID,
    appId: EnvironmentConsts.PROD.APP_ID,
    measurementId: EnvironmentConsts.PROD.MEASUREMENT_ID  
  }
};
