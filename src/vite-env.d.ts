/// <reference types="vite/client" />

interface FirebaseConfig {
  apiKey: string
  authDomain: string 
  projectId: string 
  storageBucket: string 
  messagingSenderId: string 
  appId: string 
  measurementId: string 
}

interface ImportMetaEnv {
  MODE: string
  VITE_SERVICE_NAME: string
  VITE_FIREBASE_CONFIG: string
  VITE_USE_FIREBASE_EMULATOR: string
  VITE_API_ORIGIN: string
  VITE_VIDEO_ORIGIN: string //https://d34tjb7r78x6y5.cloudfront.net/gda/
}
