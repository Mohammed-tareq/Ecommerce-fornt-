import {app, analytics} from "../dataconfig.js";
import {getStorage, ref , uploadBytes ,getDownloadURL    } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-storage.js";
import {getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";


const storage = getStorage(app);
const proStorageRef = ref(storage,"id.files[0].name"); // save with the name of image

const db = getFirestore(app);
let productImgCollection = collection(db, "productImg")

// value form input file => id.files[0];


uploadBytes(proStorageRef, id.files[0])

// BTN FROM HTML MAKE IT BTN.desable=trun

    .then((snapshot) => {
    console.log('Uploaded an array!');
        getDownloadURL(proStorageRef)
            .then((url) => {
                addDoc(productImgCollection, {productID: id.value, imgURL: url})
                    .then(()=>{
                    console.log("data added successfully");
                })
            }).catch((error) => {
            console.log(error);
            // btn.desablic=false;
            })
}).catch((error) => console.log(error)
//// btn.desablic=false )
 );