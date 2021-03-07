// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'https://itunes.apple.com/search?term=',
    firebaseConfig : {
        apiKey: "AIzaSyCQ76xwi5Nxoe3l3dLBuu9BMA-uWiHKHt0",
        authDomain: "proyectomusica-melen.firebaseapp.com",
        projectId: "proyectomusica-melen",
        storageBucket: "proyectomusica-melen.appspot.com",
        messagingSenderId: "176222804518",
        appId: "1:176222804518:web:9b859c9bd9a8e5ff3064e7",
        measurementId: "G-Y1SE3T274G"
      },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
