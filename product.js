// STORE PRODUCT
let storeProd = () => {

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let prodName = document.getElementById("prodName").value.trim();
    let prodCat = document.getElementById("prodCat").value.trim();
    let prodPrice = document.getElementById("prodPrice").value.trim();

    if (!prodName || !prodCat || !prodPrice) {
        alert("Please fill all fields");
        return;
    }

    let product = {
        prodName,
        prodCat,
        prodPrice
    };

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Registered successfully!");

    // Clear inputs after saving
    document.getElementById("prodName").value = "";
    document.getElementById("prodCat").value = "";
    document.getElementById("prodPrice").value = "";
};


// SEARCH PRODUCT
let searchProd = () => {

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let search = document.getElementById("searchProduct").value.trim().toLowerCase();

    if (!search) {
        alert("Enter something to search");
        return;
    }

    let foundProd = products.find(product =>
        product.prodName.toLowerCase() === search ||
        product.prodCat.toLowerCase() === search
    );

    if (foundProd) {
        console.log("Product Found:");
        console.log(foundProd);
    } else {
        console.log("No product found");
    }
};
