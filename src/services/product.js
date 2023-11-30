import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchProducts() {
    const productsCollection = collection(db, "hosting");
    const querySnapshot = await getDocs(productsCollection);

    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });

    return products;
}
