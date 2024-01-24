import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyBfufjiIdHxoWxv1ksYm9sVTfwDPT6up9Y",
  
    authDomain: "crested-lexicon-402808.firebaseapp.com",
  
    databaseURL: "https://crested-lexicon-402808-default-rtdb.firebaseio.com",
  
    projectId: "crested-lexicon-402808",
  
    storageBucket: "crested-lexicon-402808.appspot.com",
  
    messagingSenderId: "457455522467",
  
    appId: "1:457455522467:web:f9b975f3cc4e6651eb6516"
  
  };

const app = initializeApp(firebaseConfig);
// export const db = getAuth(app);
export default app
