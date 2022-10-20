// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, where, query } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQSpunpWrIeuIghKgDkugswNIOH29PDhs",
  authDomain: "tienda-smart-acaf2.firebaseapp.com",
  projectId: "tienda-smart-acaf2",
  storageBucket: "tienda-smart-acaf2.appspot.com",
  messagingSenderId: "66282559015",
  appId: "1:66282559015:web:150c4be72c3c75324fa002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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

/*export async function getItemsByCategory(catParams){
    const collectionRef = doc(firestore, "Products")
    const queryCategory = query(collectionRef, where("category", "==", catParams))
    const response = await getDocs(queryCategory)

    let dataDocs = response.docs.map( documento => {
        let docFormateado = { ...documento.data(), id: documento.id}
        return docFormateado
    })
    return dataDocs
}*/

export async function getItemsByCategory(catParams){
    const collectionRef = collection(firestore, "Products")
    const queryCategory = query(collectionRef, where("category", "==", catParams))
    const misDocsInfo = await getDocs(queryCategory)

    let dataDocs = misDocsInfo.docs.map(coleccion => {
        let docFormateado = { ...coleccion.data(), id: coleccion.id }
        return docFormateado
    })
    return dataDocs
}

export default firestore
