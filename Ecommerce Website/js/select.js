
let pickedItem = new URLSearchParams(window.location.search).get('item'); // assuming 'item' is the query parameter you want
console.log(pickedItem);


let pickedItemCode = pickedItem; 
console.log(pickedItemCode);

let product;
for (let i = 0; i < products.length; i++) {
    if (products[i].CODE === pickedItemCode) {
        product = products[i];
        break; 
    }
}

if (product) {
    document.getElementById("LiquorImage").src = product.Image;
    document.getElementById("LiquorName").innerHTML = product.Name;
    document.getElementById("LiquorPrice").innerHTML = `Kes ${product.Price}`; // Corrected string interpolation
    document.getElementById("LiquorCode").innerHTML = product.CODE;
    
    let cost = product.Price;
    calculate(cost); 
}

function calculate(cost) { 
    let input = document.getElementById('quantity');
    input.addEventListener("keyup", () => {
        let quantity = parseInt(input.value, 10); 
        if (quantity > 0) {
            let total = quantity * cost;
            document.getElementById('total').innerHTML = `Kes ${total}`; // Corrected string interpolation

            console.log(total);
            deliveryTotal(total);
        }
    });
}

function deliveryTotal(total) {
    let delivery = document.getElementById('destination');
    delivery.addEventListener('change', () => {
        let deliveryCost;
        switch (delivery.value) {
            case 'Nairobi':
                deliveryCost = 1200;
                break;
            case 'Mombasa':
                deliveryCost = 2300;
                break;
            case 'Kisumu':
                deliveryCost = 3250;
                break;
            case 'Nakuru':
                deliveryCost = 4400;
                break;
            default:
                deliveryCost = 0;
                break;
        }
        let finalCost = total + deliveryCost;
        document.getElementById('total').innerHTML = `Kes ${finalCost}`; 
        console.log(finalCost);
    });
}
