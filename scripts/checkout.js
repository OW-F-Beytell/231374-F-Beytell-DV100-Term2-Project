let totalPrice = 0;
let finalPrice = 0;
let validCode = false;

showOrder = () => {
    //
    let data = JSON.parse(localStorage.getItem('subs'));
    let items = document.getElementById("tableSubs");
    let totalArea = document.getElementById("totalArea");
    let finalArea = document.getElementById("finalArea");
    
    for (let i = 0; i < data.length; i++) {
        let currName = data[i].name;
        let currBread = data[i].breadType;
        let currToppings = data[i].toppings.join(", ");
        let currSauces = data[i].sauces.join(", ");
        let currPrice = data[i].price;
        totalPrice += currPrice;

        items.innerHTML += `
            <tr>
                <td>${currName}</td>
                <td><strong>Bread Type:</strong> ${currBread}
                <br><strong>Toppings:</strong> ${currToppings}
                <br><strong>Sauce(s):</strong> ${currSauces}</td>
                <td>R ${currPrice}.00</td>
            </tr>
        `
    }
    totalArea.innerHTML = `
        R ${totalPrice}.00
    `
    finalArea.innerHTML = `
        R ${finalPrice}.00
    `
}

validateCoupon = () => {
    let validCodes = ["PENNYWISE30", "SUPERSUBS23", "MUNCHIES50"];
    let discountAmounts = [30, 23, 50];
    let numCoupons = 3;
    // alert("YEAHHHHH BUDDYYYYYY");
    let couponCode = document.getElementById("couponCode").value;
    let index = 0;

    for (let i = 0; i < numCoupons; i++) {
        if (validCode == false) {
            if (couponCode == validCodes[i]) {
                validCode = true;
                index = i;
            }
        }
    }

    let savings = 0;
    finalPrice = totalPrice;
    
    if (validCode === true) {
        // alert("LIGHTWEIGHT!!!!!");
        savings = totalPrice * (discountAmounts[index] / 100);
        finalPrice -= savings;
        // alert("BROODT!!!!!");
        
        document.getElementById("finalSection").innerHTML = `
            <tr>
                <td id="totalArea">R ${totalPrice}.00</td>
                <td>Yes</td>
                <td>- ${discountAmounts[i]} % (- R ${savings}.00)</td>
                <td id="finalArea">R ${finalPrice}.00</td>
            </tr>
        `
    }
    else {
        alert("That coupon code is not valid");
    }
}

resetHome = () => {
    localStorage.removeItem('subs');
    window.location.href = "index.html";
}