console.log("test");

makeMySub = () => {
    console.log("hello world");
    let thisSub = getSubDetails();
    let outName = "Generic Name";
    if (thisSub.name.value != "") {
        outName = thisSub.name.value;
    }
    
    let toppings = getToppingsArr();
    let toppingsArr = [];
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            toppingsArr.push(toppings[i].value);
        }
    }
    let sauces = getSaucesArr();
    let saucesArr = [];
    for (let i = 0; i < sauces.length; i++) {
        if (sauces[i].checked) {
            saucesArr.push(sauces[i].value);
        }
    }
    let price = determinePrice();

    document.getElementById("listOfSubs").innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title"><strong>${outName}</strong></h4>
                <p class="card-text">
                    <strong>Bread Type:</strong> ${thisSub.breadType.value}
                    <br><strong>Toppings:</strong> ${toppingsArr.join(", ")}
                    <br><strong>Sauce(s):</strong> ${saucesArr.join(", ")}
                    <h5><strong>Price:</strong> R${price}.00</h5>
                </p>
            </div>
        </div>
    `
    clearForm();
}
getToppingsArr = () => {
    let toppingsArr = [];

    toppingsArr.push(document.getElementById("Ham")); 
    toppingsArr.push(document.getElementById("Salami")); 
    toppingsArr.push(document.getElementById("Smoked Turkey")); 
    toppingsArr.push(document.getElementById("Fried Chicken")); 
    toppingsArr.push(document.getElementById("Roast Beef")); 
    toppingsArr.push(document.getElementById("Bacon")); 
    toppingsArr.push(document.getElementById("Pepperoni")); 
    toppingsArr.push(document.getElementById("Prosciutto")); 
    toppingsArr.push(document.getElementById("Tuna")); 
    toppingsArr.push(document.getElementById("Grilled Chicken")); 
    toppingsArr.push(document.getElementById("Pastrami")); 
    toppingsArr.push(document.getElementById("Sliced Pork")); 
    toppingsArr.push(document.getElementById("Meatballs")); 
    toppingsArr.push(document.getElementById("Cheddar Cheese")); 
    toppingsArr.push(document.getElementById("Swiss Cheese")); 
    toppingsArr.push(document.getElementById("Provolone Cheese")); 
    toppingsArr.push(document.getElementById("Pepper Jack Cheese")); 
    toppingsArr.push(document.getElementById("Feta Cheese")); 
    toppingsArr.push(document.getElementById("Tomato")); 
    toppingsArr.push(document.getElementById("Gherkins")); 
    toppingsArr.push(document.getElementById("Peppers")); 
    toppingsArr.push(document.getElementById("Jalapeño Peppers")); 
    toppingsArr.push(document.getElementById("Red Onion")); 
    toppingsArr.push(document.getElementById("Sweet Onion")); 
    toppingsArr.push(document.getElementById("Shredded Lettuce")); 
    toppingsArr.push(document.getElementById("Cucumber Slices")); 
    toppingsArr.push(document.getElementById("Avocado Slices")); 
    toppingsArr.push(document.getElementById("Olives")); 
    toppingsArr.push(document.getElementById("Mushrooms")); 
    toppingsArr.push(document.getElementById("Sun-Dried Tomatoes")); 
    toppingsArr.push(document.getElementById("Pineapple Chunks")); 
    toppingsArr.push(document.getElementById("Guacamole")); 
    toppingsArr.push(document.getElementById("Onion Rings"));

    return toppingsArr;
}

getSaucesArr = () => {
    let saucesArr = [];

    saucesArr.push(document.getElementById("Tangy Mayonnaise")); 
    saucesArr.push(document.getElementById("Mustard")); 
    saucesArr.push(document.getElementById("Honey Mustard")); 
    saucesArr.push(document.getElementById("Sweet Chilli")); 
    saucesArr.push(document.getElementById("BBQ Sauce")); 
    saucesArr.push(document.getElementById("Hot Sauce")); 
    saucesArr.push(document.getElementById("Ranch Dressing")); 
    saucesArr.push(document.getElementById("Secret Sub Sauce")); 

    return saucesArr;
}

getBreadPrice = () =>{
    let breadType = document.getElementById("breadChoice").value;
    let breadPrice = 0;

    if (breadType === "Base Roll") {
        breadPrice = 8;
    } else if (breadType === "Sesame Seed Roll") {
        breadPrice = 10;
    } else if (breadType === "Rye Bread") {
        breadPrice = 12;
    } else if (breadType === "Wholewheat Bread") {
        breadPrice = 10;
    } else if (breadType === "Sourdough Bread") {
        breadPrice = 12;
    } else if (breadType === "Garlic Bread") {
        breadPrice = 14;
    } else if (breadType === "Baguette") {
        breadPrice = 14;
    }

    return breadPrice;
}

getSubDetails = () => {
    let subName = document.getElementById("subName");
    let subBread = document.getElementById("breadChoice");
    let currPrice = determinePrice();
    let toppingsArr = getToppingsArr();
    let saucesArr = getSaucesArr();
    let ingredientsArr = [];

    for (let i = 0; i < toppingsArr.length; i++) {
        if (toppingsArr[i].checked) {
            ingredientsArr.push(toppingsArr[i]);
        }
    }
    for (let i = 0; i < saucesArr.length; i++) {
        if (saucesArr[i].checked) {
            ingredientsArr.push(saucesArr[i]);
        }
    }

    let thisSub = {
        name: subName,
        breadType: subBread,
        ingredients: ingredientsArr,
        price: currPrice
    }

    document.getElementById("runningPrice").innerHTML = `
        <strong>Price:</strong> R${thisSub.price}</h4>
    `
    return thisSub;
}
determinePrice = () =>{
    let toppingsArr = getToppingsArr();
    let saucesArr = getSaucesArr();
    let ingredientsArr = [];

    for (let i = 0; i < toppingsArr.length; i++) {
        if (toppingsArr[i].checked) {
            ingredientsArr.push(toppingsArr[i]);
        }
    }
    for (let i = 0; i < saucesArr.length; i++) {
        if (saucesArr[i].checked) {
            ingredientsArr.push(saucesArr[i]);
        }
    }

    let price = 0;
    price += getBreadPrice();
    for (let i = 0; i < ingredientsArr.length; i++) {
        if (ingredientsArr[i].checked) {
            price += +ingredientsArr[i].dataset.cost;
        }
    }

    return price;
}
clearForm = () => {
    document.getElementById("customisationForm").innerHTML = `
        <form onload="getSubDetails()" onchange="getSubDetails()">
        <h1>Build a Sub</h1>

        <div class="form-group">
        <label for="subName"><strong>Give your sub a name!</strong></label>
        <input type="text" class="form-control" id="subName" placeholder="">
        </div>

        <div class="form-group">
        <label for="breadChoice"><strong>Choose your bread type</strong></label>
        <select class="form-control" id="breadChoice">
            <option data-cost="8">Base Roll</option>
            <option data-cost="10">Sesame Seed Roll</option>
            <option data-cost="12">Rye Bread</option>
            <option data-cost="10">Wholewheat Bread</option>
            <option data-cost="12">Sourdough Bread</option>
            <option data-cost="14">Garlic Bread</option>
            <option data-cost="14">Baguette</option>
        </select>
        </div>

        <label for="toppingsList"><strong>Select your sub's toppings</strong> (minimum 5)</label>
        <div class="toppingsForm">
        <div class="row">
            <div class="col-4">
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Ham" id="Ham" data-cost="10">
                <label class="form-check-label" for="Ham">
                Ham
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Salami" id="Salami" data-cost="12">
                <label class="form-check-label" for="Salami">
                Salami
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Smoked Turkey" id="Smoked Turkey" data-cost="15">
                <label class="form-check-label" for="Smoked Turkey">
                Smoked Turkey
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Fried Chicken" id="Fried Chicken" data-cost="18">
                <label class="form-check-label" for="Fried Chicken">
                Fried Chicken
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Roast Beef" id="Roast Beef" data-cost="20">
                <label class="form-check-label" for="Roast Beef">
                Roast Beef
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Bacon" id="Bacon" data-cost="15">
                <label class="form-check-label" for="Bacon">
                Bacon
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Pepperoni" id="Pepperoni" data-cost="12">
                <label class="form-check-label" for="Pepperoni">
                Pepperoni
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Prosciutto" id="Prosciutto" data-cost="18">
                <label class="form-check-label" for="Prosciutto">
                Prosciutto
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Tuna" id="Tuna" data-cost="20">
                <label class="form-check-label" for="Tuna">
                Tuna
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Grilled Chicken" id="Grilled Chicken" data-cost="18">
                <label class="form-check-label" for="Grilled Chicken">
                Grilled Chicken
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Pastrami" id="Pastrami" data-cost="22">
                <label class="form-check-label" for="Pastrami">
                Pastrami
                </label>
            </div>
            </div>

            <div class="col-4">
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Sliced Pork" id="Sliced Pork" data-cost="20">
                <label class="form-check-label" for="Sliced Pork">
                Sliced Pork
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Meatballs" id="Meatballs" data-cost="16">
                <label class="form-check-label" for="Meatballs">
                Meatballs
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Cheddar Cheese" id="Cheddar Cheese" data-cost="8">
                <label class="form-check-label" for="Cheddar Cheese">
                Cheddar Cheese
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Swiss Cheese" id="Swiss Cheese" data-cost="10">
                <label class="form-check-label" for="Swiss Cheese">
                Swiss Cheese
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Provolone Cheese" id="Provolone Cheese" data-cost="10">
                <label class="form-check-label" for="Provolone Cheese">
                Provolone Cheese
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Pepper Jack Cheese" id="Pepper Jack Cheese" data-cost="12">
                <label class="form-check-label" for="Pepper Jack Cheese">
                Pepper Jack Cheese
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Feta Cheese" id="Feta Cheese" data-cost="12">
                <label class="form-check-label" for="Feta Cheese">
                Feta Cheese
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Tomato" id="Tomato" data-cost="5">
                <label class="form-check-label" for="Tomato">
                Tomato
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Gherkins" id="Gherkins" data-cost="4">
                <label class="form-check-label" for="Gherkins">
                Gherkins
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Peppers" id="Peppers" data-cost="6">
                <label class="form-check-label" for="Peppers">
                Peppers
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Jalapeño Peppers" id="Jalapeño Peppers" data-cost="6">
                <label class="form-check-label" for="Jalapeño Peppers">
                Jalapeño Peppers
                </label>
            </div>
            </div>

            <div class="col-4">
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Red Onion" id="Red Onion" data-cost="5">
                <label class="form-check-label" for="Red Onion">
                Red Onion
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Sweet Onion" id="Sweet Onion" data-cost="5">
                <label class="form-check-label" for="Sweet Onion">
                Sweet Onion
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Shredded Lettuce" id="Shredded Lettuce" data-cost="4">
                <label class="form-check-label" for="Shredded Lettuce">
                Shredded Lettuce
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Cucumber Slices" id="Cucumber Slices" data-cost="6">
                <label class="form-check-label" for="Cucumber Slices">
                Cucumber Slices
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Avocado Slices" id="Avocado Slices" data-cost="12">
                <label class="form-check-label" for="Avocado Slices">
                Avocado Slices
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Olives" id="Olives" data-cost="6">
                <label class="form-check-label" for="Olives">
                Olives
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Mushrooms" id="Mushrooms" data-cost="6">
                <label class="form-check-label" for="Mushrooms">
                Mushrooms
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Sun-Dried Tomatoes" id="Sun-Dried Tomatoes" data-cost="10">
                <label class="form-check-label" for="Sun-Dried Tomatoes">
                Sun-Dried Tomatoes
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Pineapple Chunks" id="Pineapple Chunks" data-cost="8">
                <label class="form-check-label" for="Pineapple Chunks">
                Pineapple Chunks
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Guacamole" id="Guacamole" data-cost="12">
                <label class="form-check-label" for="Guacamole">
                Guacamole
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Onion Rings" id="Onion Rings" data-cost="8">
                <label class="form-check-label" for="Onion Rings">
                Onion Rings
                </label>
            </div>
            </div>
        </div>
        </div>
        
        <br>

        <label for="sauceList"><strong>Select your sub's sauce(s)</strong> (minimum 1)</label>
        <div class="sauceForm" id="sauceList">
        <div class="row">
            <div class="col-6">
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Tangy Mayonnaise" id="Tangy Mayonnaise" data-cost="5">
                <label class="form-check-label" for="Tangy Mayonnaise">
                Tangy Mayonnaise
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Mustard" id="Mustard" data-cost="4">
                <label class="form-check-label" for="Mustard">
                Mustard
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Honey Mustard" id="Honey Mustard" data-cost="6">
                <label class="form-check-label" for="Honey Mustard">
                Honey Mustard
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Sweet Chilli" id="Sweet Chilli" data-cost="6">
                <label class="form-check-label" for="Sweet Chilli">
                Sweet Chilli
                </label>
            </div>
            </div>
            <div class="col-6">
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="BBQ Sauce" id="BBQ Sauce" data-cost="4">
                <label class="form-check-label" for="BBQ Sauce">
                BBQ Sauce
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Hot Sauce" id="Hot Sauce" data-cost="5">
                <label class="form-check-label" for="Hot Sauce">
                Hot Sauce
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Ranch Dressing" id="Ranch Dressing" data-cost="5">
                <label class="form-check-label" for="Ranch Dressing">
                Ranch Dressing
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Secret Sub Sauce" id="Secret Sub Sauce" data-cost="8">
                <label class="form-check-label" for="Secret Sub Sauce">
                Secret Sub Sauce
                </label>
            </div>
            </div>
        </div>
        </div>

        <h4 style="margin-top: 40px;" id="runningPrice"><strong>Price:</strong> R0.00</h4>

        <p class="lead">
        <a class="btn btn-primary btn-lg bg-superSubOrange" role="button" style="margin-top: 40px;" onclick="makeMySub()">Add Sub to Your Order</a>
        </p>

    </form>
    `
}