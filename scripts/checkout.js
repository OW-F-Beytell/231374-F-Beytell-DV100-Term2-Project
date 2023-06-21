showOrder = () => {
    //
    let data = JSON.parse(localStorage.getItem('subs'));
    let items = document.getElementById("tableSubs");
    let totalArea = document.getElementById("totalArea");


    let total = 0;
    for (let i = 0; i < data.length; i++) {
        let currName = data[i].name;
        let currBread = data[i].breadType;
        let currToppings = data[i].toppings.join(", ");
        let currSauces = data[i].sauces.join(", ");
        let currPrice = data[i].price;
        total += currPrice;

        items.innerHTML += `
            <tr>
                <td>${currName}</td>
                <td><strong>Bread Type:</strong> ${currBread}
                <br><strong>Toppings:</strong> ${currToppings}
                <br><strong>Sauce(s):</strong> ${currSauces}</td>
                <td>R ${currPrice}.00</td>
            </tr>
        `
        totalArea.innerHTML = `
            R ${total}.00
        `
    }
}

resetHome = () => {
    localStorage.removeItem('subs');
    window.location.href = "../index.html";
}