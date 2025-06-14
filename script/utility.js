// get any value converted to number 
function getConvertedValue(id){
    const idName = document.getElementById(id).innerText;
    const convertedIdName = parseInt(idName);
    return convertedIdName;
}

// total cost calculation 
function totalCostCalculation(priceOfPlayer){
   const primaryPrice =  getConvertedValue("total-cost");
   document.getElementById("total-cost").innerText = primaryPrice + parseInt(priceOfPlayer);

}
