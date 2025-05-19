import {app, analytics} from "../dataconfig.js";
import {getFirestore, collection, addDoc  } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";


const db = getFirestore(app);
let productCollection = collection(db, "products")

//  =======================the  input product========================

let productID = document.getElementById("productID");
let brandName = document.getElementById("brandName");
let policy = document.getElementById("policy");
let size = document.getElementById("size");
let oldPrice = document.getElementById("oldPrice");
let badge = document.getElementById("badge");
let categoryName = document.getElementById("categoryName");
let productName = document.getElementById("productName");
let priceProduct = document.getElementById("priceProduct");
let productCount = document.getElementById("productCount");
let productImg = document.getElementById("productImg");
let descriptionProduct = document.getElementById("descriptionProduct");
let addProductBtn = document.getElementById("addProductBtn");
// ==================================================================

// ===========================add product event=========================

addProductBtn.addEventListener("click", addProductDB);

//=============================================================================





//========================================= add function =====================

async function addProductDB(e) {
    e.preventDefault();
    try {
        if ( !categoryName.value || !productName.value ||
            !priceProduct.value || !productCount.value || !productImg.value ||
            !descriptionProduct.value) {
            alert("Please fill in all fields");
            return;
        }



        let  productObj = {
            ID: productID.value,
            brand:brandName.value,
            policy:policy.value,
            size:size.value,
            oldPrice:oldPrice.value,
            badge:badge.value,
            category: categoryName.value,
            title: productName.value,
            price: priceProduct.value,
            Count: productCount.value,
            Img: productImg.value,
            description: descriptionProduct.value,
            createdAt: new Date().toLocaleString(),
        };
        const docRef = await addDoc(productCollection, productObj);

        console.log("data added successfully", docRef.id);

        categoryName.value = '';
        productName.value = '';
        priceProduct.value = '';
        productCount.value = '';
        productImg.value = '';
        descriptionProduct.value = '';
        productID.value = '';
        brandName.value = '';
        policy.value = '';
        size.value = '';
        oldPrice.value = '';
        badge.value = '';


        console.log("Product added successfully!");

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}



