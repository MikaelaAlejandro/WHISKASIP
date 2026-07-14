function placeOrder(){

    let name = document.getElementById("name").value;

    if(name==""){
        alert("Please enter your name.");
        return;
    }

    let matcha = document.getElementById("matcha");

    let product = matcha.options[matcha.selectedIndex].text;

    let price = Number(matcha.value);

    let quantity = Number(document.getElementById("quantity").value);

    let total = price * quantity;

    alert(
"✅ ORDER CONFIRMATION\n\n" +
"Customer: " + name +
"\n\nProduct: " + product +
"\nQuantity: " + quantity +
"\n\nTotal Price: ₱" + total +
"\n\nThank you for ordering from WHISKASIP!"
);

}