// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Configuring the realtime database from Firebase

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDYYWZHEkF2_IKfOF1Z4trABG7kTf-_Aw4",
    authDomain: "quiz-db-d6ef1.firebaseapp.com",
    databaseURL: "https://quiz-db-d6ef1.firebaseio.com",
    projectId: "quiz-db-d6ef1",
    storageBucket: "quiz-db-d6ef1.appspot.com",
    messagingSenderId: "1076014767629",
    appId: "1:1076014767629:web:6399fe360a4e02ca91bf44"
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
