const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
};

// This function creates the Firebase singleton for the app
let firebaseInstance;
export const getFirebase = (firebase) => {
  if (firebaseInstance) {
    return firebaseInstance;
  }

  const defaultFirebase = firebase.default;

  defaultFirebase.initializeApp(config);
  firebaseInstance = defaultFirebase;

  return defaultFirebase;
};
