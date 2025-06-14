const allBtn = document.getElementsByClassName("add-to-cart-btn");
for(const btn of allBtn){
btn.addEventListener("click", function(event){
    // getting inner text dynamically 
    const playerName = event.target.parentNode.parentNode.childNodes[1].innerText;
    const playerPrice = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    const playerCategory = event.target.parentNode.parentNode.childNodes[7].childNodes[1].innerText;

    // cart condition 

    const cartCount = getConvertedValue("cart");
    if(cartCount === 6){
        alert("You Can't Select More Than Six Players");
        return;
    }
    
    event.target.setAttribute("disabled", true);
    // banner section formating
    const budget = getConvertedValue("budget");
    document.getElementById("budget").innerText = budget - playerPrice;
    const cart = getConvertedValue("cart");
    document.getElementById("cart").innerText = cart+1;
    const left = getConvertedValue("left");
    document.getElementById("left").innerText = left-1;



    // creatng p tags for appending list 
    const selectedPlayerContainer = document.getElementById("selected-player-container");
    const divForPlayers = document.createElement('div');
    divForPlayers.classList.add("flex");
    divForPlayers.classList.add("justify-between");
    const pName = document.createElement("p");
    pName.innerText = playerName;
    const pPrice = document.createElement("p");
    pPrice.innerText = playerPrice;
    const pCategory = document.createElement("p");
    pCategory.innerText = playerCategory;

    divForPlayers.appendChild(pName);
    divForPlayers.appendChild(pCategory);
    divForPlayers.appendChild(pPrice);

    selectedPlayerContainer.appendChild(divForPlayers);
    // total cost calculation part 
    totalCostCalculation(playerPrice);
    // update grand cost 
    updateGrandCost();
})
}

// update grand cost with coupon code 

function updateGrandCost(codeAdded){
if(codeAdded){
    if(document.getElementById("coupon-code").value === "love420"){
        const discount = getConvertedValue("total-cost")* .2;
        const budget = getConvertedValue("budget");
        document.getElementById("budget").innerText = budget + discount;
        const afterDiscountPrice = getConvertedValue("total-cost") - discount;
        document.getElementById("grand-cost").innerText = afterDiscountPrice;
            event.target.setAttribute("disabled", true);

        return;

    }
     else{
        alert("Provide a valid coupon code")
     }
}
else{
     const totalCost = getConvertedValue("total-cost");
   document.getElementById("grand-cost").innerText = totalCost;
}
}
