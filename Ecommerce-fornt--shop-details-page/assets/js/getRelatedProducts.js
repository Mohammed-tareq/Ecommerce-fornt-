import { collection, db, getDocs, limit, query, where } from "./firebaseFirestore.js";
import { getDetailsOfProduct } from "./getDetailsOfProduct.js";
import { setDataToRelatedProducts } from "./setDataToRelatedProducts.js";

async function getRelatedProducts({ category}) {
    let q = query(collection(db, 'products'), where("category", "==", category), limit(4));
    const documentSnapshots = await getDocs(q);
    const docs = documentSnapshots.docs;
    docs.forEach(doc => {
        let queryString = window.location.search;
        let id = queryString.split('=')[1];
        setDataToRelatedProducts(doc.data(), id);        
    });
}


export { getRelatedProducts };