console.log("test");

makeMySub = () => {
    console.log("hello world");
    let thisSub = getSubDetails();
    let outName = "Generic Name";
    if (thisSub.name.value != "") {
        outName = thisSub.name.value;
    }
    let subIngredientOutString = [];

    // determine price of sub //
    let price = 0;
    price += +thisSub.size.dataset.cost;

    for (let i = 0; i < thisSub.ingredients.length; i++) {
        if (thisSub.ingredients[i].checked) {
            price += +thisSmoothie.ingredients[i].dataset.cost;
            subIngredientOutString.push(thisSub.ingredients[i].value)
        }
    }

    document.getElementById("listOfSubs").innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title"><strong>Sub Name</strong></h4>
                <p class="card-text">
                    <strong>Bread Type:</strong> Sesame Seed Roll
                    <br><strong>Toppings:</strong> Fried Chicken, Tomato, Jalapeño Peppers, Shredded Lettuce, Chillies
                    <br><strong>Sauce(s):</strong> Tangy Mayonnaise
                    <h5><strong>Price:</strong> R45.00</h5>
                </p>
            </div>
        </div>
    `
    clearForm();
}

getSubDetails = () => {
    let subName = document.getElementById("subName");
    let subBread = document.getElementById("breadChoice");
    let ingredientsArr = [];

    {
    if (document.getElementById("cucumber").checked) {
        ingredientsArr.push(document.getElementById("cucumber"));
    }
    if (document.getElementById("carrots").checked) {
        ingredientsArr.push(document.getElementById("carrots"));
    }
    if (document.getElementById("celery").checked) {
        ingredientsArr.push(document.getElementById("celery"));
    }
    if (document.getElementById("berries").checked) {
        ingredientsArr.push(document.getElementById("berries"));
    }
    if (document.getElementById("kale").checked) {
        ingredientsArr.push(document.getElementById("kale"));
    }
    if (document.getElementById("pineapple").checked) {
        ingredientsArr.push(document.getElementById("pineapple"));
    }
    }

    let thisSmoothie = {
        name: smoothieName,
        size: smoothieSize,
        ingredients: ingredientsArr
    }
    return thisSmoothie;
}

clearForm = () => {
    document.getElementById("inputForm").innerHTML = `
        <h3>The Smoothie Shack</h3>
        <input type="text" class="form-control" placeholder="Name your Smoothie" id="smoothie" value="">
        
        <div class="size">
        <strong><p>Smoothie Size</p></strong>

        <div class="base-check">
            <input class="form-check-input" type="radio" name="baseRadio" id="small" value="Small" data-cost="20" checked="true">
            <label class="form-check-label" for="small">
            Small Cup
            </label>
        </div>

        <div class="base-check">
            <input class="form-check-input" type="radio" name="baseRadio" id="medium" value="Medium" data-cost="30">
            <label class="form-check-label" for="medium">
            Medium Cup
            </label>
        </div>

        <div class="base-check">
            <input class="form-check-input" type="radio" name="baseRadio" id="large" value="Large" data-cost="40">
            <label class="form-check-label" for="large">
            Large Cup 
            </label>
        </div>

        <div class="base-check">
            <input class="form-check-input" type="radio" name="baseRadio" id="mega" value="Mega" data-cost="60">
            <label class="form-check-label" for="mega">
            Mega Cup 
            </label>
        </div>

        </div>

        

        <strong><p>Ingredients</p></strong>
    
        <div class="ingredients">
        <div class="top-check">
            <input class="form-check-input" name="ingredients" type="checkbox" value="cucumber" id="cucumber" data-cost="20">
            <label class="form-check-label" for="cucumber">
            Cucumber
            </label>
        </div>

        <div class="top-check">
            <input class="form-check-input" name="ingredients" type="checkbox" value="carrots" id="carrots" data-cost="14">
            <label class="form-check-label" for="carrots">
            Carrots
            </label>
        </div>

        <div class="top-check">
            <input class="form-check-input" name="ingredients" type="checkbox" value="celery" id="celery" data-cost="20">
            <label class="form-check-label" for="celery">
            Celery 
            </label>
        </div>

        <div class="top-check">
            <input class="form-check-input" name="ingredients" type="checkbox" value="berries" id="berries" data-cost="30">
            <label class="form-check-label" for="berries">
            Blue Berries  
            </label>
        </div>

        <div class="top-check">
            <input class="form-check-input" name="ingredients" type="checkbox" value="kale" id="kale" data-cost="20">
            <label class="form-check-label" for="kale">
            Kale
            </label>
        </div>

        <div class="top-check">
            <input class="form-check-input" name="ingredients" type="checkbox" value="pineapple" id="pineapple" data-cost="70">
            <label class="form-check-label" for="pineapple">
            Pineapple  
            </label>
        </div>
        </div>

        
        
        <button class="btn btn-primary" type="button" onclick="makeMySmoothie()">Make My Smoothie</button>
    `
}