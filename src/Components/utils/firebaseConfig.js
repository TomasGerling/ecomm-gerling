// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, query, where } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlqseOziJAB1Iu0_KD5VRTyWfkhxS8fnY",
  authDomain: "ecomm-gerling-91751.firebaseapp.com",
  projectId: "ecomm-gerling-91751",
  storageBucket: "ecomm-gerling-91751.appspot.com",
  messagingSenderId: "524925997113",
  appId: "1:524925997113:web:59ea68fa70267ed8733de8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (id) =>{
    let q;
    if(id){
        q = query(collection(db, "products"),where("categoryId", "==", id));
    } else {
        q = query(collection(db, "products"));
    } 

    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore;
}

export const firestoreFind = async (id) =>{
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            ...docSnap.data()
        };
    } else {
        console.log("No such document!");
    }
};