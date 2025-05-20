import { collection, db, getDocs, limit, query, where } from "./firebaseFirestore.js";
import { setDataToRelatedProducts } from "./setDataToRelatedProducts.js";

async function getRelatedProducts({ category}) {
    let q = query(collection(db, 'products'), where("category", "==", category), limit(4));
    const documentSnapshots = await getDocs(q);
    const docs = documentSnapshots.docs;
    docs.forEach(doc => {
        setDataToRelatedProducts(doc.data(), doc.id);        
    });
}


export { getRelatedProducts };