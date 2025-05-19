import {app, analytics} from "../dataconfig.js";
import {getFirestore, collection, getDocs, doc ,deleteDoc} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";


const db = getFirestore(app);
let productCollection = collection(db, "products");
let tbody = document.getElementById("tbody")

async function getProducts() {

    try {
        let querySnapshot = await getDocs(productCollection);
        let table = '';
        if (!querySnapshot.empty) {

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                table += `
               <tr">
               <td>${data.ID}</td> 
                <td>${data.product}</td>
                <td>${data.price}</td>
                <td>${data.Count}</td>
                <td>${data.category}</td>
                <td>${data.Img}</td>
                <td><button class="btn btn-bd-primary btn-delete" id="${doc.id}">DELETE</button></td>

               </tr>`;
            })
            tbody.innerHTML = table;

            document.querySelectorAll(".btn-delete").forEach(button => {
                button.addEventListener('click', function() {
                    deleteRow(this.id);
                });
            });


        } else {
            tbody.innerHTML = `
            <tr>
            <td colspan="6">No Data Found</td>
            `;
        }
    } catch (e) {
            tbody.innerHTML = `
                <tr>
                <td colspan="6">No Data Found Pleace chick Connection in DB</td>
                </tr>
                `;
    }
}

getProducts();

// ============================delete===========================

async function deleteRow(id) {
    try {
        if (confirm('Are you sure you want to delete this item?')) {
            await deleteDoc(doc(db, "products", id));
            await getProducts();
        }
    } catch (error) {
        console.error("Error deleting document:", error);
        alert('Error deleting item. Please try again.');
    }
}


