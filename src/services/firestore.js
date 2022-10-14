// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, where, query } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcxf1wC2Oj7NLVc6UNW7EyfiOmPianW5A",
  authDomain: "tiendasmart-1310f.firebaseapp.com",
  projectId: "tiendasmart-1310f",
  storageBucket: "tiendasmart-1310f.appspot.com",
  messagingSenderId: "709382545164",
  appId: "1:709382545164:web:a3067836fe2ab3820ef329",
  measurementId: "G-VNYP8JBHCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export async function getItems() {
    const collectionRef = collection(firestore, "Products")
    let snapshotDb = await getDocs(collectionRef)

    let dataDocs = snapshotDb.docs.map( documento => {
        let docFormateado = { ...documento.data(), id: documento.id}
        return docFormateado
    })
    return dataDocs
}

export async function getSingleItem(idParams){
    const docRef = doc(firestore, "Products", idParams)
    const docSnapshot = await getDoc(docRef)

    return { ...docSnapshot.data(), id: docSnapshot.id}
}

export async function getItemsByCategory(catParams){
    const collectionRef = doc(firestore, "Products")
    const queryCategory = query(collectionRef, where("category", "==", catParams))
    const response = await getDocs(queryCategory)

    let dataDocs = response.docs.map( documento => {
        let docFormateado = { ...documento.data(), id: documento.id}
        return docFormateado
    })
    return dataDocs
}

export default firestore
